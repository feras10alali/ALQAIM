<script>
    import { slide } from 'svelte/transition';
    export let data;
    
    // Profile fields bound to the form inputs:
    let firstName = data.user.firstName;
    let lastName = data.user.lastName;
    let email = data.user.email;
    
    // Password fields:
    let currentPassword = ""; // Binding added for current password.
    let password = "";
    let passwordConfirm = "";
    
    // Toggles for password visibility and for showing password change fields:
    let showPassword = false;
    let passwordchange = false;
    
    // Construct avatar URL if the user has a proper avatar filename.
    // If the avatar is only one character, we assume it’s the fallback initial.
    const pbUrl = import.meta.env.VITE_POCKETBASE_URL;
    let avatarUrl = "";
    if (data.user.avatar && data.user.avatar.length > 1) {
      avatarUrl = `${pbUrl}/api/files/users/${data.user.id}/${data.user.avatar}`;
    }
  </script>
  
  <div class="w-full grid justify-items-center pt-12 mt-[10%] mb-10">
    <div class="w-full max-w-[70rem] p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 bg-gray-400">
      <h2 class="text-3xl">الملف الشخصي</h2>
      <div class="w-full flex relative justify-center">
        {#if avatarUrl}
          <div class="relative inline-block">
            <img class="inline-block w-[8rem] rounded-full shadow-lg" src={avatarUrl} alt="user avatar"/>
            <span class="absolute bottom-3 end-0 block size-6 rounded-full justify-items-center align-center ring-2 ring-white bg-obj">
              <svg class="w-[22px] ml-[5%] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
              </svg>
            </span>
          </div>
        {:else}
          <div class="relative inline-block">
            <span class="w-[8rem] h-[8rem] bg-[#ccc] flex items-center justify-center text-[4rem] text-white rounded-[50%]">
              {data.user.firstName.charAt(0)}
            </span>
            <span class="absolute bottom-3 end-0 block size-6 rounded-full justify-items-center align-center ring-2 ring-white bg-obj">
              <svg class="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
              </svg>
            </span>
          </div>
        {/if}
      </div>
      
      <div class="flex flex-col w-full mt-10">
        <div class="w-full flex flex-row">
          <div class="w-[50%] flex flex-col ml-1.5">
            <label class="pr-1.5 pb-1" for="firstName">الأسم الأول</label>
            <div class="w-full flex flex-row">
              <input bind:value={firstName} type="text" id="firstName" name="firstName" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
              <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-[50%] flex flex-col mr-1.5">
            <label class="pr-1.5 pb-1" for="lastName">الأسم الأخير</label>
            <div class="w-full flex flex-row">
              <input bind:value={lastName} type="text" id="lastName" name="lastName" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
              <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="w-[100%] flex flex-col mt-2.5">
          <label class="pr-1.5 pb-1" for="email">البريد الإلكتروني</label>
          <div class="w-full flex flex-row">
            <input bind:value={email} type="text" id="email" name="email" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
            <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
              </svg>
            </button>
          </div>
        </div>
        <hr class="h-px mt-12 mb-8 bg-black border-0">
        <h2 class="text-3xl">تغيير كلمة المرور<button on:click={() => passwordchange = !passwordchange} data-popover-target="popover-default" type="button" class="w-[2.3rem] text-button h-[2.3rem] mr-2 align-middle shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
          </svg>
        </button></h2>
        
        <div class="w-[100%] flex flex-col mt-[4%]">
          <button class="bg-buttons hover:bg-buttonhov text-white" >تغيير كلمة المرور</button>
          <label class="pr-1.5 pb-1" for="cpassword">كلمة المرور الحالية</label>
          <div class="w-full flex flex-row">
            <!-- Binding added for current password -->
            <input bind:value={currentPassword} type="password" id="cpassword" name="cpassword" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
            <button on:click={() => passwordchange = !passwordchange} data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
              </svg>
            </button>
          </div>
        </div>
        {#if passwordchange}
          <div transition:slide={{ duration: 350 }} class="w-full flex flex-row mt-2">
            <div class="w-[50%] flex flex-col ml-1.5">
              <label class="pr-1.5 pb-1" for="password">كلمة المرور الجديدة</label>
              <div class="w-full relative flex flex-row">
                <button 
                  type="button" 
                  on:click={() => showPassword = !showPassword} 
                  class="absolute inset-y-0 left-11 flex items-center px-2"
                  aria-label="Toggle password visibility">
                  {#if showPassword}
                    <svg class="w-6 h-6 duration-300 text-textcolor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  {:else}
                    <svg class="w-6 h-6 duration-300 text-textcolor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  {/if}
                </button>
                <input bind:value={password} type={showPassword ? "text" : "password"} id="password" name="password" placeholder="*********" class="py-3 px-4 block w-full text-textcolor border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div transition:slide={{ duration: 350 }} class="w-[50%] flex flex-col mr-1.5">
              <label class="pr-1.5 pb-1" for="passwordconfirm">تأكيد كلمة المرور الجديدة</label>
              <div class="w-full flex flex-row">
                <input bind:value={passwordConfirm} type="text" id="passwordconfirm" name="passwordconfirm" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/if}
      </div>
      
      <form method="post" action="?/updateProfile">
        <button type="submit" class="mt-8 w-full px-4 py-2 text-lg text-white bg-blue-600 rounded-lg">تحديث الملف الشخصي</button>
      </form>
      <form method="post" action="?/updatePassword">
        <button type="submit" class="mt-8 w-full px-4 py-2 text-lg text-white bg-blue-600 rounded-lg">تحديث كلمة المرور</button>
      </form>
    </div>
  </div>
  