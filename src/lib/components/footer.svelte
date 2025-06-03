<script>
  import logo from '$lib/images/logo.webp';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { Instagram, Youtube, Facebook } from 'lucide-svelte';

  let show = false;
  let footerContent;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerContent) observer.observe(footerContent);
  });
</script>

<footer class="w-full bg-[#ab8f3e] text-white overflow-hidden">
  <div bind:this={footerContent}>
    {#if show}
      <div
        in:slide={{ y: 50, duration: 600 }}
        out:slide={{ y: 50, duration: 1 }}
        class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start px-6 py-12 gap-10"
      >
        <!-- Social & Support -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm sm:text-base font-light w-full sm:w-auto">
          <!-- Social -->
          <div>
            <h3 class="text-white font-semibold mb-4 text-lg border-b border-white/30 pb-1">مواقع التواصل الاجتماعي</h3>
            <ul class="space-y-3 text-white/90">
              <li>
                <a
                  href="https://www.instagram.com/alqaema?igsh=ODg3MmFsNW1sdzFq"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <Instagram class="w-5 h-5 hover:scale-110 transition-transform" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@imamqaemhussainyah?si=V3eRk46LEf2DQLdp"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <Youtube class="w-5 h-5 hover:scale-110 transition-transform" /> Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <Facebook class="w-5 h-5 hover:scale-110 transition-transform" /> Facebook
                </a>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-white font-semibold mb-4 text-lg border-b border-white/30 pb-1">الدعم</h3>
            <ul class="space-y-2 text-white/80">
              <li class="hover:text-white transition">إبلاغ عن خطاء</li>
              <li class="hover:text-white transition">Documentation</li>
              <li class="hover:text-white transition">Guides</li>
            </ul>
          </div>
        </div>

        <!-- Logo -->
        <div class="mt-10 sm:mt-0">
          <img src={logo} alt="Logo" class="w-40 sm:w-52 object-contain mx-auto sm:mx-0" />
        </div>
      </div>
    {/if}
  </div>
</footer>
