import { json } from '@sveltejs/kit';
import { createPocketBase } from '$lib/pocketbase';

export async function POST({ request, cookies }) {
  try {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const avatar = data.get('avatar'); // Retrieve the avatar file

    // Build the user data object.
    const userData = {
      email,
      password,
      passwordConfirm: password,
      firstName,
      lastName,
      role: 'user'
    };

    // Attach avatar if provided.
    if (avatar) {
      userData.avatar = avatar;
    }

    // Pass { cookies } so that createPocketBase has access to cookies.
    const { pb } = createPocketBase({ cookies });

    // Create a new user record.
    await pb.collection('users').create(userData);

    // Authenticate the user after registration.
    await pb.collection('users').authWithPassword(email, password);

    // Set the authentication cookie.
    cookies.set('authcookie', pb.authStore.exportToCookie(), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7
    });

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: err.message || 'Registration error' }, { status: 400 });
  }
}
