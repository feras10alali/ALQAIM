import { redirect, fail } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  
  if (!locals.user || !locals.user.admin) {
    throw redirect(303, '/');
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals }) => {
    const user = locals.user;

    if (!user || !user.admin) {
      throw redirect(303, '/');
    }

    const formData = await request.formData();

    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      video: formData.get('video'),
      Thumbnail: formData.get('Thumbnail')
    };

    try {
      await pb.collection('videos').create(data);
      return { success: true };
    } catch (err) {
      console.error('Error uploading video:', err);
      return fail(400, {
        message: 'فشل تحميل الفيديو. تأكد من صحة البيانات.',
        error: err.message
      });
    }
  }
};
