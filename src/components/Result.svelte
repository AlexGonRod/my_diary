<script lang="ts">
	import { BaseMessage } from '@lib/store';

	async function getData() {
		const chacked = await fetch('/api/get_data');
		const [result] = await chacked.json();
		return result;
	}
</script>

<article class="my-10 px-10">
	{#if $BaseMessage}
		{#await getData() then res}
			<div
				class="resize-none block p-2.5 w-full my-1 text-base lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{@html res?.message}
			</div>
			<div
				class="resize-none block p-2.5 w-full texxl lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{@html res?.response}
			</div>
		{/await}
	{/if}
</article>
