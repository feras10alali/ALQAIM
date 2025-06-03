<script>
  import { goto } from '$app/navigation';
  import { invalidate } from '$app/navigation';
  import { page } from '$app/stores';
  let title = '';
  let description = '';
  let videoFile;
  let thumbnailFile;
  let error = '';

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', videoFile);
    formData.append('Thumbnail', thumbnailFile);

    const res = await fetch('/admin/addvideo', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      goto('/'); // Or redirect somewhere else after success
    } else {
      const result = await res.json();
      error = result.message || 'Something went wrong.';
    }
  }
</script>

<h1 class="text-2xl font-bold mb-4">إضافة فيديو جديد</h1>

{#if error}
  <p class="text-red-500 mb-4">{error}</p>
{/if}

<form on:submit|preventDefault={handleSubmit} class="space-y-4 max-w-xl">
  <div>
    <label class="block font-semibold mb-1">العنوان</label>
    <input type="text" bind:value={title} class="w-full p-2 border rounded" required />
  </div>

  <div>
    <label class="block font-semibold mb-1">الوصف</label>
    <textarea bind:value={description} class="w-full p-2 border rounded" required></textarea>
  </div>

  <div>
    <label class="block font-semibold mb-1">ملف الفيديو</label>
    <input type="file" accept="video/*" on:change={(e) => videoFile = e.target.files[0]} required />
  </div>

  <div>
    <label class="block font-semibold mb-1">الصورة المصغرة</label>
    <input type="file" accept="image/*" on:change={(e) => thumbnailFile = e.target.files[0]} required />
  </div>

  <button type="submit" class="bg-[#ab8f3e] text-white px-6 py-2 rounded hover:opacity-90">إرسال</button>
</form>
