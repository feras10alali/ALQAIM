<script>
    import logo from '$lib/images/logo.webp';
    import Tlogo from '$lib/images/TGlogo.webp';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let error = '';
    let showPassword = false;

    async function handleLogin(event) {
        event.preventDefault();
        error = ''; // Clear any existing error

        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            goto('/');
        } else {
            error = data.error || 'فشل تسجيل الدخول';
        }
    }
</script>

<div class="w-screen h-screen flex justify-center items-center p-4 bg-[#f9fafb]">
    <div class="w-full max-w-lg bg-[#ffffff] shadow-xl rounded-2xl p-8">
        <form on:submit={handleLogin} class="flex flex-col items-center w-full space-y-5">
            <!-- Logo -->

            <div class="w-48 mb-2 flex justify-center">
                <img src={logo} alt="Logo" classs="h-[50%] object-contain" />
            </div>

            <!-- Title -->
            <h2 class="text-2xl font-semibold text-[#ab8f3e]">تسجيل الدخول إلى حسابك</h2>

            <!-- Email Field -->
            <div class="relative w-full">
                <input 
                    bind:value={email}
                    id="email"
                    type="email"
                    required
                    placeholder=" "
                    class="peer block w-full p-3 pt-5 text-sm bg-transparent border border-[#ab8f3e] rounded-xl text-[#ab8f3e] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#ab8f3e] focus:border-[#ab8f3e] transition-all"
                />
                <label 
                    for="email"
                    class="absolute start-3 top-1 text-sm text-[#ab8f3e] bg-[#ffffff] px-1 transition-all scale-75 -translate-y-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ab8f3e] peer-focus:scale-75 peer-focus:-translate-y-5"
                >
                    البريد الإلكتروني
                </label>
            </div>

            <!-- Password Field -->
            <div class="relative w-full">
                <button
                    type="button"
                    on:click={() => showPassword = !showPassword}
                    class="absolute inset-y-0 left-0 flex items-center px-3 text-[#ab8f3e] hover:text-[#9c7500] transition-all"
                    aria-label="Toggle password visibility"
                >
                    {#if showPassword}
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    {:else}
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    {/if}
                </button>
                <input 
                    bind:value={password}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder=" "
                    class="peer block w-full p-3 pt-5 pl-10 text-sm bg-transparent border border-[#ab8f3e] rounded-xl text-[#ab8f3e] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#ab8f3e] focus:border-[#ab8f3e] transition-all"
                />
                <label 
                    for="password"
                    class="absolute start-3 top-1 text-sm text-[#ab8f3e] bg-[#ffffff] px-1 transition-all scale-75 -translate-y-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ab8f3e] peer-focus:scale-75 peer-focus:-translate-y-5"
                >
                    كلمة المرور
                </label>
            </div>

            <!-- Forgot Password -->
            <div class="w-full text-end">
                <a href="/forgot-password" class="text-sm text-[#ad9b66] hover:text-[#9c7500] hover:underline transition-all">
                    هل نسيت كلمة المرور؟
                </a>
            </div>

            <!-- Submit Button -->
            <button
                type="submit"
                class="w-full bg-[#c29d32] hover:bg-[#ab8f3e] active:bg-[#79652b] text-white font-semibold py-2.5 rounded-xl shadow-md transition-all"
            >
                تسجيل الدخول
            </button>

            <!-- Error Message -->
            {#if error}
                <p class="text-red-500 text-sm italic">{error}</p>
            {/if}

            <!-- Register Prompt -->
            <p class="text-sm text-[#ab8f3e]">
                ليس لديك حساب؟ 
                <a href="/register" class="text-[#ad9b66] hover:text-[#9c7500] hover:underline transition-all">
                    قم بالتسجيل
                </a>
            </p>
        </form>
    </div>
</div>
