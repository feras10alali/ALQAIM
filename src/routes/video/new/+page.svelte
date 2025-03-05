<script>
	import { enhance } from '$app/forms';
    import { Input, Button} from 'flowbite-svelte';
    import { FloatingLabelInput, Helper } from 'flowbite-svelte';
	import TextEdidtor from '$lib/components/textEdidtor.svelte';
    
    let title = '';
    let description = '';
</script>



<div class="flex w-[50%] h-full p-2 place-self-center pt-[8%]">
	<div class="w-full text-center">
		<form
			action=""
			method="POST"
			class="flex flex-col w-full items-center"
			enctype=""
			use:enhance
		>
			<h3 class="text-3xl font-bold">اضافة فيديو</h3>
            <label for="email" class="self-start pr-1">عنوان الفيديو</label>
            <Input bind:value={title} type="text" placeholder="عنوان الفيديو" class="bg-wbg border border-buttons mt-1.5 input input-bordered w-full"/>
            <Input bind:value={description} type="text" placeholder="الأسم الأول" class="bg-wbg border border-buttons mt-1.5 input input-bordered w-full"/>
            <TextEdidtor/>
			<Button type="submit" class="btn bg-buttons hover:bg-buttonhov text-white btn-primary w-full">اضافة<svg class="w-[15px] h-[15px] mr-[.5%] ml-[3%] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/></svg></Button>
		</form>
	</div>
</div>

<div class="relative h-10 w-full mb-5">
  <input type="text" placeholder=" "
    class="h-full w-full border border-gray-300 p-4 rounded-md hover:border-gray-500 focus:border-green-500 focus:outline-none peer"/>
  <label class="absolute left-2 bg-white px-1 text-green-600 text-xs top-0 transition-all peer-focus:transform peer-focus:-translate-y-[1.1rem] peer-focus:scale-75">
    Enter name
  </label>
</div>