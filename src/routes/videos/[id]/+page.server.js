import { error } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export async function load({ params }) {
  const { id } = params;

  try {
    const record = await pb.collection('videos').getOne(id);

    return {
      video: {
        id: record.id,
        title: record.title,
        videoUrl: pb.files.getURL(record, record.video),
        thumbnailUrl: pb.files.getURL(record, record.Thumbnail), // 👈 Added thumbnail
        description: record.description
      }
    };
  } catch (err) {
    throw error(404, 'Video not found');
  }
}
