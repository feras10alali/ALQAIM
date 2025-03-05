<script>
import { crossfade, draw, fade, fly, scale, slide} from 'svelte/transition';
    export let data;
    const pbUrl = "http://127.0.0.1:8090/";
    let avatarUrl = data.user.avatar;
    let passwordchange = false;
    if (avatarUrl && !avatarUrl.startsWith('http')) {
        avatarUrl = `${pbUrl}api/files/users/${data.user.id}/${avatarUrl}`;
    }

</script>

<div class="w-full grid justify-items-center pt-12 mt-[10%]">
    <div class="w-full max-w-[70rem] p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 bg-gray-400">
        <h2 class="text-3xl">الملف الشخصي</h2>
        <div class="w-full flex ralative justify-center">
          {#if data.user.avatar.length > 1}

            <div class="relative inline-block ">
                <img class="inline-block w-[8rem] rounded-full  shadow-lg" src={avatarUrl} alt="user avatar"/>
                <span class="absolute bottom-3 end-0 block size-6 rounded-full justify-items-center align-center ring-2 ring-white bg-obj"><svg class="w-[22px] ml-[5%] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/></svg></span>
            </div>            
          {:else}
            <span class="w-[9rem] h-[9rem]h-24 bg-[#ccc] flex items-center justify-center text-[4rem] text-white rounded-[50%]">{data.user.firstName.charAt(0)}</span>
          {/if}
        </div>
        
        
        <div class="flex flex-col w-full mt-4">
            <div class="w-full flex flex-row">
                <div class="w-[50%] flex flex-col ml-1.5">
                    <label class="pr-1.5 pb-1" for="firstName">الأسم الأول</label>
                    <div  class="w-full flex flex-row">
                        <input bind:value={firstNameDB} type="text" id="firstName" name="hs-trailing-button-add-on-with-icon" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                        <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-[50%] flex flex-col mr-1.5">
                    <label class="pr-1.5 pb-1" for="lastName">الأسم الأخير</label>
                    <div  class="w-full flex flex-row">
                        <input bind:value={data.user.lastName} type="text" id="lastName" name="hs-trailing-button-add-on-with-icon" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                        <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-[100%] flex flex-col mt-2.5">
                <label class="pr-1.5 pb-1" for="email">البريد الإلكتروني</label>
                <div  class="w-full flex flex-row">
                    <input  type="text" id="email" name="hs-trailing-button-add-on-with-icon" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                    <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <hr class="h-px mt-12 mb-8 bg-black border-0">
            <div class="w-[100%] flex flex-col mt-2.5">
                <label class="pr-1.5 pb-1" for="password">كلمة المرور الحالية</label>
                <div  class="w-full flex flex-row">
                    <input  type="password" id="password" name="hs-trailing-button-add-on-with-icon" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                    <button on:click={() => passwordchange = !passwordchange} data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            {#if passwordchange}
            <div transition:slide={{ duration: 350 }} class="w-full flex flex-row mt-2">
                <div class="w-[50%] flex flex-col ml-1.5">
                    <label class="pr-1.5 pb-1" for="firstName">كلمة المرور الجديدة</label>
                    <div  class="w-full flex flex-row">
                        <input bind:value={data.user.firstName} type="text" id="firstName" name="hs-trailing-button-add-on-with-icon" placeholder="*********" class="py-3 px-4 block w-full text-textcolor border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                        <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div transition:slide={{ duration: 350 }} class="w-[50%] flex flex-col mr-1.5">
                    <label class="pr-1.5 pb-1" for="lastName">تأكيد كلمة المرور الجديدة</label>
                    <div  class="w-full flex flex-row">
                        <input bind:value={data.user.lastName} type="text" id="lastName" name="hs-trailing-button-add-on-with-icon" class="py-3 px-4 block w-full border-obj shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-obj focus:ring-obj disabled:opacity-50 disabled:pointer-events-none text-textcolo">
                        <button data-popover-target="popover-default" type="button" class="w-[2.875rem] text-button h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-buttons text-white hover:bg-buttonhov focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                s<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>
 