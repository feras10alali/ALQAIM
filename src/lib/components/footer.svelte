<script>
    import logo from '$lib/images/logo.webp';
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    import { Instagram, Facebook, Youtube } from 'lucide-svelte';
    let show = false;
    let footerContent;
  
    onMount(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          show = entry.isIntersecting;
        },
        {
          threshold: 0.2
        }
      );
  
      if (footerContent) {
        observer.observe(footerContent);
      }
    });
  </script>
  
  <footer class="w-full h-[40vh] bg-[#ab8f3e] text-white overflow-hidden">
    <div bind:this={footerContent}>
      {#if show}
        <div
          in:slide={{ y: 50, duration: 600 }}
          out:slide={{ y: 50, duration: 1 }}
          class="max-w-7xl mx-auto h-full flex flex-col sm:flex-row justify-between items-center sm:items-start px-6 py-12"
        >

        <div class="grid grid-cols-2 gap-12 text-sm sm:text-base font-light">
            <div>
              <h3 class="text-white font-semibold mb-2">مواقع التواصل الأجتماعي</h3>
              <ul class="space-y-2 text-white/90">
                <li class="flex items-center gap-2">
                  <a href="https://www.instagram.com/alqaema?igsh=ODg3MmFsNW1sdzFq" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                    <Instagram class="w-5 h-5" /> Instagram
                  </a>
                </li>
                <li class="flex items-center gap-2">
                  <a href="https://youtube.com/@imamqaemhussainyah?si=V3eRk46LEf2DQLdp" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                    <Youtube class="w-5 h-5" /> Youtube
                  </a>
                </li>

              </ul>
            </div>
  
            <div>
              <h3 class="text-white font-semibold mb-2">الدعم</h3>
              <ul class="space-y-1 text-white/80">
                <li>إبلاغ عن خطاء</li>
                <li>Documentation</li>
                <li>Guides</li>
              </ul>
            </div>
          </div>
  
          <!-- Right Logo -->
          <div class="mt-10 sm:mt-0">
            <img src={logo} alt="Logo" class="w-40 sm:w-52 object-contain" />
          </div>
        </div>
      {/if}
    </div>
  </footer>
  