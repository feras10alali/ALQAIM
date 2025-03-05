<script>
    import logo from '$lib/images/logo.webp'
    import { Avatar } from "flowbite-svelte";
</script>



<header class="flex flex-row w-full bg-obj pt-1 pb-2 pr-12">
    <div class="w-[15%] flex">
        <img src={logo} class="h-[110px]" alt="logo">
    </div>
    <div>
        <nav class="text-white text-center align-items-center">
            <ul>
                <li>Home</li>
            </ul>
        </nav>
    </div>
    <div class="flex w-[15%] place-self-end"> 
        <img src={logo} class="w-[4rem]" alt="avatar"/>
    </div>
</header>
