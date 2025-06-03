<script>
  import HEADER from '$lib/components/header.svelte';
  import FOOTER from '$lib/components/footer.svelte';

  export let data;
  const { video } = data;
</script>

<HEADER />

<main class="max-w-5xl mx-auto px-4 py-12 space-y-10 text-gray-800">
  <!-- Video Player -->
  <div class="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
    <video
      src={video.videoUrl}
      controls
      class="w-full h-full object-cover rounded-2xl"
    ></video>
  </div>

  <!-- Title -->
  <h1 class="text-3xl sm:text-4xl font-bold text-center text-[#1a1a1a] tracking-tight">
    {video.title}
  </h1>

  <!-- Animated Divider (optional) -->
  <div class="flex justify-center">
    <div class="w-24 h-1 bg-[#ab8f3e] rounded-full animate-pulse"></div>
  </div>

  <!-- Description -->
  <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-200 leading-relaxed">
    {@html video.description}
  </div>
</main>

<FOOTER />
