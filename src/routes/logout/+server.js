import { redirect } from '@sveltejs/kit';
import { createPocketBase } from '$lib/pocketbase';

export async function POST({ cookies }) {
  // Initialize PocketBase with the current cookies
  const { pb } = createPocketBase({ cookies });
  
  // Clear the PocketBase auth store
  pb.authStore.clear();
  
  // Remove all auth-related cookies
  cookies.delete('authcookie', { path: '/' });
  cookies.delete('userFirstName', { path: '/' });
  cookies.delete('userLastName', { path: '/' });
  cookies.delete('userAvatar', { path: '/' });
  cookies.delete('userID', { path: '/' });
  
  // Redirect the user to the login page (or wherever you prefer)
  throw redirect(303, '/login');
}
