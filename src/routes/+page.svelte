<script>
  import HEADER from '$lib/components/header.svelte';
  import FOOTER from '$lib/components/footer.svelte';
  import { onMount, onDestroy } from 'svelte';
  export let data;

  const images = data.images;
  let container;
  let slideWidth = 0;
  let current = 0;
  let interval;

  function updateSlideWidth() {
    if (container?.firstElementChild instanceof HTMLElement) {
      slideWidth = container.firstElementChild.offsetWidth;
    }
  }

  function scrollToIndex(index) {
    if (!container || slideWidth === 0) return;
    current = (index + images.length) % images.length;
    container.scrollTo({ left: current * slideWidth, behavior: 'smooth' });
  }

  function prev() {
    scrollToIndex(current - 1);
  }

  function next() {
    scrollToIndex(current + 1);
  }

  function onScroll() {
    if (!container || slideWidth === 0) return;
    current = Math.round(container.scrollLeft / slideWidth);
  }

  onMount(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    container.addEventListener('scroll', onScroll);

    interval = setInterval(next, 5000);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
      container.removeEventListener('scroll', onScroll);
    };
  });

  onDestroy(() => clearInterval(interval));
</script>

<HEADER />

<div class="w-full max-w-3xl mx-auto relative overflow-hidden rounded-xl shadow-lg my-8">
  <!-- Slides -->
  <div
    bind:this={container}
    class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
  >
    {#each images as image}
      <div class="min-w-full flex-shrink-0 snap-center">
        <img src={image.url} alt="Slide" class="w-full h-80 object-cover" />
      </div>
    {/each}
  </div>

  <!-- Arrows -->
  <div class="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
    <button on:click={prev} class="bg-white/70 hover:bg-white text-black p-2 rounded-full shadow">‹</button>
    <button on:click={next} class="bg-white/70 hover:bg-white text-black p-2 rounded-full shadow">›</button>
  </div>

  <!-- Dots -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    {#each images as _, i}
      <div
        class="w-3 h-3 rounded-full border border-gray-400 transition-all"
        class:bg-black={i === current}
        class:bg-white={i !== current}
      />
    {/each}
  </div>
</div>

<FOOTER />

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
