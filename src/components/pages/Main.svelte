<script lang="ts">
	import Toast from '@components/Toast.svelte';
	import Loader from '@components/Loader.svelte';
	import Form from '@components/Form.svelte';
	import Message from '@components/Message.svelte';
	import { NewMessage, NewResponse, Errors, isLoading } from '@lib/store';
</script>

<section
	class="h-[560px] w-full px-40 col-span-10 md:col-span-8 bg-[#353441] flex flex-col justify-between items-center text-white"
>
	<div class="w-full h-full flex flex-col justify-start items-center">
		<h1 class="text-2xl sm:text-4xl font-bold text-center mt-5">
			¿Cómo puedo ayudarte?
		</h1>
		{#if $Errors?.message}
			<Toast message={$Errors.message} />
		{/if}
		{#if $NewMessage}
			<Message user='YOU' message={$NewMessage} />
			{#if $isLoading}
				<Loader />
			{/if}
			{#if $NewResponse}
				<Message user='IA' message={$NewResponse?.result} />
			{/if}
		{/if}
	</div>
	<Form />
</section>
