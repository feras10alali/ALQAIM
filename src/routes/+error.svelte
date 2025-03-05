<script>
	import { page } from '$app/state';
	import { emojis } from '$lib/emojis.js';
    import logo from '$lib/images/logo.webp';
</script>


<div class="flex flex-col w-[50%] h-full p-2 place-self-center text-center pt-[8%]">
    {#if page.status}
        <div class="w-[18%]">
            <img src={logo} class="w-[10%]" alt="logo">
        </div>
        <h1 class="text-textcolor"><span class="text-3xl">🤨</span>?trying to mess around</h1>
    {/if}
    <h1>{page.status} {page.error.message}</h1>
    <span style="font-size: 10em">
        {emojis[page.status] ?? emojis[500]}
    </span>
</div>