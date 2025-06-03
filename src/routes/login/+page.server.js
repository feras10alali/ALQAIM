import { redirect, fail } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

/** @type {import('./$types').PageServerLoad} */
export const load = ({ locals }) => {
	if (locals.user) {
		throw redirect(303, '/'); // Already logged in — redirect home
	}
	return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toLowerCase().trim();
		const password = formData.get('password')?.trim();

		if (!email || !password) {
			return fail(400, { error: 'يرجى تعبئة جميع الحقول' });
		}

		try {
			await pb.collection('users').authWithPassword(email, password);
			throw redirect(303, '/');
		} catch (err) {
			console.error('AUTH ERROR:', err?.response?.message || err.message);
			return fail(401, { error: 'بيانات تسجيل الدخول غير صحيحة' });
		}
	}
};
