import { redirect, json } from '@sveltejs/kit';
export async function GET({ locals }) {
	// Ensure the user is signed in
	if (!locals.pb || !locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	// Assuming the user record is stored in authStore.model and includes a `role` property
	const user = locals.pb.authStore.model;
	if (!user || user.role !== 'admin') {
		// If the user's role is not 'admin', redirect them (for example, to an unauthorized page)
		throw redirect(303, '/unauthorized');
	}

	return ({ message: 'Welcome, Admin!' });
}