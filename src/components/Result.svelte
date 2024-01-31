<script lang="ts">
	import { BaseMessage, NewMessage, isLoading } from '@lib/store';
	export let urlId: string = '';
	$: console.log($BaseMessage)

	async function getData() {
		const checked = await fetch(`/api/get_data?id=${urlId}`);
		const result = checked.json();
		// isLoading.set(false);
		return result;
	}
</script>

<article class="my-10 px-10">

	{#await getData() then res}
		<div
			class="resize-none block p-2.5 w-full texxl lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			{@html res.response}
		</div>
	{/await}
</article>
