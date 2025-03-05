import { redirect, fail } from '@sveltejs/kit';
import { createPocketBase } from '$lib/pocketbase';

export async function load({ locals }) {
  // Protect the route; redirect if not logged in
  if (!locals.pb?.authStore?.isValid) {
    throw redirect(303, '/login');
  }
  // Return the current user data to pre-fill the form
  return { user: locals.user };
}

export const actions = {
  updateProfile: async ({ request, locals, cookies }) => {
    if (!locals.pb?.authStore?.isValid) {
      throw redirect(303, '/login');
    }
    
    const data = await request.formData();
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');

    try {
      // Update the user record in PocketBase; adjust the API call as needed
      const updatedUser = await locals.pb
        .collection('users')
        .update(locals.user.id, { firstName, lastName, email });
      
      // Optionally update cookies if you're storing parts of the user data client-side.
      cookies.set('userFirstName', encodeURIComponent(JSON.stringify({ firstName })), {
        path: '/',
        httpOnly: false,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7
      });

      return { success: true, user: updatedUser };
    } catch (error) {
      console.error(error);
      return fail(400, { error: error.message });
    }
  },
  updatePassword: async ({ request, locals }) => {
    if (!locals.pb?.authStore?.isValid) {
      throw redirect(303, '/login');
    }
    
    const data = await request.formData();
    const password = data.get('password');
    const passwordConfirm = data.get('passwordConfirm');
    
    if (password !== passwordConfirm) {
      return fail(400, { error: 'Passwords do not match' });
    }
    
    try {
      // Update the password on the user's record
      const updatedUser = await locals.pb
        .collection('users')
        .update(locals.user.id, { password, passwordConfirm });
      
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error(error);
      return fail(400, { error: error.message });
    }
  }
};
