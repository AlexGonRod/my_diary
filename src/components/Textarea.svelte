<script lang="ts">
	import { isLoading } from '@lib/store';
	import Loader from '@components/Loader.svelte';
	import { fetchData } from '@lib/fetchData';
	import { SetNewMessage, BaseMessage } from '@lib/store';
	import { supabase } from '@lib/supabase';

	let message = null;

	async function submit(e: SubmitEvent) {
		let res;
		console.log(e);
		// try {
		// 	if (message) {
		// 		const result = await fetchData(message);
		// 		console.log(result)
		// 	}
		// } catch (error) {
		// 	return new Response('Bad request', { status: 500 });
		// }
		// return res;
	}

	// function setHandler() {
	// 	BaseMessage.set(message)
	// 	console.log(message)
	// 	isLoading.set(true);
	// }
</script>

<form on:submit|preventDefault={submit} class="w-full px-10">
	<div class="mt-1">
		<!-- {#if $isLoading}
			<div class="flex justify-center py-5">
				<Loader />
			</div>
		{/if} -->
		{#if message}
			<div
				class="resize-none block p-2.5 w-full my-1 text-base lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{message}
			</div>
		{/if}
		<textarea
			bind:value={message}
			name="textarea"
			id="message"
			rows="4"
			class="resize-none block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Tu texto..."
		></textarea>
	</div>
	<div class="flex justify-end py-5">
		<button
			on:click={() => BaseMessage.set(message)}
			type="submit"
			class="button rounded-md bg-indigo-600 px-3 py-1.5 text-sm lg:text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Send
		</button>
	</div>
</form>
