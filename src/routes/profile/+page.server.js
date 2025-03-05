import { redirect, fail } from '@sveltejs/kit';
import { createPocketBase } from '$lib/pocketbase';

export async function load({ locals, cookies }) {
	if (!locals.pb?.authStore?.isValid) {
		throw redirect(303, '/login');
	}
	
	// Optionally, read the avatar cookie if needed:
	const avatarCookie = cookies.get('userAvatar');
	let avatar = '';
	if (avatarCookie) {
		avatar = JSON.parse(decodeURIComponent(avatarCookie)).avatar;
	}
	
	return { user: locals.user, avatar };
}

export const actions = {
	updateAvatar: async ({ request, locals, cookies }) => {
		if (!locals.pb?.authStore?.isValid) {
			throw redirect(303, '/login');
		}
		
		const data = await request.formData();
		const avatarFile = data.get('avatar');
		if (!avatarFile) {
			return fail(400, { error: 'No avatar file provided' });
		}
		
		try {
			// Update the avatar field on the user record in PocketBase.
			// Adjust the API call based on how your PocketBase API handles file uploads.
			const updatedUser = await locals.pb
				.collection('users')
				.update(locals.user.id, { avatar: avatarFile });
			
			// After updating, update the userAvatar cookie with the new value.
			cookies.set(
				'userAvatar',
				encodeURIComponent(JSON.stringify({ avatar: updatedUser.avatar })),
				{
					path: '/',
					httpOnly: false,
					sameSite: 'strict',
					secure: process.env.NODE_ENV === 'production',
					maxAge: 60 * 60 * 24 * 7 // 1 week
				}
			);
			
			return { success: true, user: updatedUser };
		} catch (error) {
			console.error('Avatar update error:', error);
			return fail(400, { error: error.message });
		}
	},
	// Other actions (updateProfile, updatePassword, etc.)
};
