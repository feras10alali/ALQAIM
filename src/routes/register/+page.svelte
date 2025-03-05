<script>
	import { Input } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import logo from '$lib/images/logo.webp';

	let email = '';
	let password = '';
	let passwordConfirm = '';
	let firstName = '';
	let lastName = '';
	let avatar;
	let error = '';
	let showPassword = false;


	async function handleRegister(event) {
		event.preventDefault();

		if (password !== passwordConfirm) {
			error = 'كلمة المرور غير متطابقة';
			return;
		}

		const formData = new FormData();
		formData.append('email', email);
		formData.append('password', password);
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);

		if (avatar && avatar.length > 0) {
			formData.append('avatar', avatar[0]);
		}

		const res = await fetch('/register', {
			method: 'POST',
			body: formData
		});

		const data = await res.json();

		if (data.success) {
			goto('/');
		} else {
			error = data.error || 'Registration failed';
			console.log(error)
		}
	}
</script>

<div class="w-screen h-screen flex justify-center items-center p-4 pt-0">
	<div class="w-full max-w-lg flex justify-center items-center">
		<form on:submit|preventDefault={handleRegister} class="flex flex-col justify-center items-center w-full">
			<div class="w-[16rem] mb-1 flex justify-center items-center">
				<img src={logo} alt="Logo" class="object-center" />
			</div>
			<h2 class="mt-0 mb-4 text-2xl text-textcolor">تسجيل حساب</h2>
			<div class="relative mb-1.5 w-full">
				<input 
					bind:value={firstName}
					id="firstName"
					type="text"
					class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none text-textcolor border-obj focus:border-obj focus:outline-none focus:ring-0 focus:border-obj peer"
					placeholder=" "
					required
				/>
				<label for="firstName" class=" font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:text-base start-1">الأسم الأول</label>
			</div>

			<div class="relative mt-1 mb-1.5 w-full">
				<input 
					bind:value={lastName}
					id="lastName"
					type="text"
					class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none text-textcolor border-obj focus:border-obj focus:outline-none focus:ring-0 focus:border-obj peer"
					placeholder=" "
				/>
				<label for="lastName" class=" font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:text-base start-1">الأسم الأخير</label>
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

			<div class="relative mt-1 mb-1.5 w-full">
				<input 
					bind:value={passwordConfirm}
					id="passwordConfirm"
					type="password"
					class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none text-textcolor border-obj focus:border-obj focus:outline-none focus:ring-0 focus:border-obj peer"
					placeholder=" "
					required
				/>
				<label for="passwordConfirm" class=" font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:text-base start-1">تأكيد كلمة المرور</label> 
			</div>
			<div class="mb-3 w-full">
				<label class="pt-1 mb-1 font-semibold" for="avatar">صورة الملف الشخصي</label>
				<input
					type="file"
					bind:files={avatar}
					class="w-full mb-3 text-textcolor font-semibold text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-buttons file:hover:bg-buttonhov file:text-white rounded"
				/>
			</div>
			<button
				type="submit"
				class="mt-0 mb-4 bg-buttons hover:bg-buttonhov text-white font-bold text-sm rounded-lg block w-full p-2.5"
			>
				تسجيل الدخول
			</button>
			{#if error}
				<p class="mt-4 text-red-500">{error}</p>
			{/if}
			<p class="label-text-alt text-lg">
				لديك حساب بالفعل؟
				<span class="text-textcolor1 hover:text-textcolor2 hover:cursor-pointer">
					<a href="/login">قم بتسجيل الدخول</a>
				</span>
			</p>
		</form>
	</div>
</div>
