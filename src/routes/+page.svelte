<script>
  import { slide } from 'svelte/transition';
  import logo from '$lib/images/logo.webp';
  import { Button } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';  const pbUrl = import.meta.env.URL;
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
  export let data; 
  let dropdownA = true
  let avatarUrl = "";
  let firstName = data.user.firetName
  if (data.user.avatar && data.user.avatar.length > 1) {
    avatarUrl = `${pbUrl}/api/files/users/${data.user.id}/${data.user.avatar}`;
    console.log(avatarUrl)
  }
</script>
<header class=" flex items-center justify-between py-4 px-[4rem]  bg-white shadow-md">

  
  <div class="flex items-center">
    <img src={logo} alt="Website Logo" class="w-24" />
  </div>
  <div class="hover:cursor-pointer">
    {#if avatarUrl}
      <img id="avatar-menu" src={avatarUrl} alt="User Avatar" class="w-10 h-10 rounded-full" />
    {:else}
      <div id="avatar-menu" class="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
        {data.user.firstName.charAt(0)}
      </div>
    {/if}
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">{firstName}</span>
        <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    {#if dropdownA}
      <div id="dropdown" class="z-10 hidden bg-gray-500 divide-y divide-gray-300 rounded-lg shadow-sm w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    {/if}
      
  </div>
</header>
