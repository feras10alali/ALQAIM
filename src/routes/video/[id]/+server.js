import { redirect, json } from '@sveltejs/kit';
export async function GET({ locals }) {
  if (!locals.pb || !locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  }
  return json({ message: 'Welcome to the protected route!' });
}
