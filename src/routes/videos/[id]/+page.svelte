<script>
    import HEADER from '$lib/components/header.svelte';
    import FOOTER from '$lib/components/footer.svelte';

    export let data;
    const { video } = data;
  </script>
  
  <HEADER />
  
  <div class="max-w-5xl mx-auto px-4 py-10 space-y-6">
    <!-- Video Player -->
    <div class="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-md">
      <video
        src={video.videoUrl}
        controls
        class="w-full h-full object-contain"
      ></video>
    </div>
  
    <!-- Title -->
    <h1 class="text-2xl font-semibold text-black">
      {video.title}
    </h1>
  
    <!-- Divider -->
    <div class="border-b border-gray-900"></div>
  
    <!-- Description -->
    <div class="prose max-w-none text-black">
      {@html video.description}
    </div>
  </div>

  <FOOTER/>
  