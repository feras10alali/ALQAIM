// src/routes/+page.server.js
import { pb } from '$lib/pocketbase';

export async function load() {
  const records = await pb.collection('slidePhotos').getFullList({
    sort: '-created'
  });

  const images = records.map((record) => ({
    id: record.id,
    url: pb.files.getURL(record, record.image)
  }));

  return { images };
}
