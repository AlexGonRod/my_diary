<script>
	import { Errors, SetNewError, NewMessage, setConversations } from '@lib/store/store';
	import Loader from '@components/Loader.svelte';
	import { onMount } from 'svelte';

	let conversations = [];

	onMount(async () => {

		const res = await fetch('/api/get_conversations');
		if (!res.ok) SetNewError('Error getting conversations');

		const response = await res.json()
		setConversations(response)
		conversations = response;
	})

	// $: if($NewMessage) conversations =[...conversations, {responses: {message: $NewMessage}}];
</script>

<aside
	class="hidden h-screen md:grid justify-left col-span-0 md:col-span-2 bg-gray-800"
>
	<div class="flex flex-col">
		{#key conversations}
			{#await conversations}
				<Loader />
			{:then conversation}
				{#each conversation as conv}
					<div class=" pt-6 mx-4">
						<ol class="grid grid-cols-1">
							<li class="hover:bg-gray-500/90 p-1 cursor-pointer">
								<a
									href={conv.id}
									class="relative hover:text-grey-800 text-white/90 text-sm lg:text-base truncate block max-w-[240px] pr-6"
								>
									{conv.responses.message}
								</a>
							</li>
						</ol>
					</div>
				{/each}
			{:catch}
				<p>{$Errors.message}</p>
			{/await}
		{/key}
	</div>
</aside>

<style>
	li {
		text-wrap: nowrap;
	}
</style>
