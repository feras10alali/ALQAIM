import { serialize } from 'cookie';
import { createPocketBase } from '$lib/pocketbase';

export async function handle({ event, resolve }) {
  // Pass the full event so that createPocketBase can access event.cookies
  const { pb, clearAuthCookie } = createPocketBase(event);
  event.locals.pb = pb;
  event.locals.user = null;

  console.log("Checking user authentication...");

  let userFirstName = '';
  let userLastName = '';
  let userAvatar = '';
  let userID = '';

  if (pb.authStore.isValid) {
    const user = pb.authStore.model;
    if (user) {
      // Store user data in locals with no default placeholders
      event.locals.user = {
        id: user.id,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email,
        // If no avatar exists, use the first letter of firstName (or an empty string)
        avatar: user.avatar || (user.firstName ? user.firstName.charAt(0) : '')
      };

      userFirstName = user.firstName || '';
      userLastName = user.lastName || '';
      userAvatar = event.locals.user.avatar;
      userID = user.id;
      console.log("User found:", event.locals.user);
    }
  }

  // Clear cookies if authentication is invalid
  if (clearAuthCookie) {
    event.cookies.set('authcookie', '', { path: '/', maxAge: 0 });
    event.cookies.set('userFirstName', '', { path: '/', maxAge: 0 });
    event.cookies.set('userLastName', '', { path: '/', maxAge: 0 });
    event.cookies.set('userAvatar', '', { path: '/', maxAge: 0 });
    event.cookies.set('userID', '', { path: '/', maxAge: 0 });
  }

  const response = await resolve(event);

  try {
    if (pb.authStore.isValid) {
      const authCookie = pb.authStore.exportToCookie();
      response.headers.append(
        'set-cookie',
        serialize('authcookie', authCookie, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7 // 1 week
        })
      );

      response.headers.append(
        'set-cookie',
        serialize('userFirstName', encodeURIComponent(JSON.stringify({ firstName: userFirstName })), {
          path: '/',
          httpOnly: false,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7
        })
      );

      response.headers.append(
        'set-cookie',
        serialize('userLastName', encodeURIComponent(JSON.stringify({ lastName: userLastName })), {
          path: '/',
          httpOnly: false,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7
        })
      );

      response.headers.append(
        'set-cookie',
        serialize('userAvatar', encodeURIComponent(JSON.stringify({ avatar: userAvatar })), {
          path: '/',
          httpOnly: false,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7
        })
      );

      response.headers.append(
        'set-cookie',
        serialize('userID', encodeURIComponent(JSON.stringify({ id: userID })), {
          path: '/',
          httpOnly: false,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7
        })
      );
    }
  } catch (err) {
    console.error("Error exporting auth cookie:", err);
    response.headers.append(
      'set-cookie',
      serialize('authcookie', '', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0
      })
    );
  }

  return response;
}
