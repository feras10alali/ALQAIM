<!-- /src/routes/login/+page.svelte -->
<script>
    import { Input } from 'flowbite-svelte';
    import logo from '$lib/images/logo.webp'
    import { goto } from '$app/navigation';
    let email = '';
    let password = '';
    let error = '';
    let showPassword = false;

  
    async function handleLogin(event) {
      event.preventDefault();
  
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
  
      if (data.success) {
        // Login successful – redirect to a protected route (for example, /dashboard)
        goto('/');
      } else {
        error = data.error || 'Login failed';
      }
    }
  </script>


    <div class="w-screen h-screen flex justify-center items-center p-4 pt-0">
        <div class="w-full max-w-lg flex justify-center items-center">
            <form on:submit|preventDefault={handleLogin} class="flex flex-col justify-center items-center w-full">
                <div class="w-[16rem] mb-1 flex justify-center items-center">
                    <img src={logo} alt="Logo" class="object-center">
                </div>
                <div>
                    <h2 class="mt-2 mb-2 text-2xl text-textcolor">
                        تسجيل الدخول إلى حسابك
                    </h2>
                </div>
                <div class="relative mt-1 mb-1.5 w-full">
                    <input 
                        bind:value={email}
                        id="email"
                        type="email"
                        class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none text-textcolor border-obj focus:border-obj focus:outline-none focus:ring-0 focus:border-obj peer"
                        placeholder=" "
                        required
                    />
                    <label for="email" class=" font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:text-base start-1">البريد الإلكتروني</label>
                </div>
                <div class="relative mt-1 mb-1.5 w-full">
                    <button 
                        type="button" 
                        on:click={() => showPassword = !showPassword} 
                        class="absolute inset-y-0 left-0 flex items-center px-2"
                        aria-label="Toggle password visibility"
                    >
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
                    
                    <input 
                        bind:value={password}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none focus:border-obj focus:outline-none focus:ring-0 peer"
                        placeholder=" "
                        required
                    />
                    
                    <label for="password" class="mr-1 font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                        كلمة المرور
                    </label>
                </div>
    
                <label for="button" class="form-control mb-4 w-full mt-0 pt-0">
                    <div class="label">
                        <span class="label-text-alt text-sm font hover:text-textcolor2">هل نسيت كلمة المرور؟</span>
                    </div>
                </label>
                <button 
                    type="submit" 
                    class="mt-0 mb-4 bg-buttons hover:bg-buttonhov text-white font-bold text-sm rounded-lg block w-full p-2.5"
                >
                    تسجيل الدخول
                </button>
                {#if error}
                    <p class="mt-4 text-red-500">{error}</p>
                {/if}
                <p class="label-text-alt text-lg">ليس لديك حساب؟ <span class="text-textcolor1 hover:text-textcolor2 hover:cursor-pointer"><a href="/register">قم بالتسجيل</a></span></p>
            </form>
        </div>
    </div>
    