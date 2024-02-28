<script lang="ts">
	import Loader from '@components/Loader.svelte';
	import Form from '@components/Form.svelte';
	import Message from '@components/Message.svelte';
	import MessageError from '@components/MessageError.svelte';
	import {
		NewMessage,
		NewResponse,
		isLoading,
		Errors,
	} from '@lib/store/store';

	export let form: boolean = true;
	export let conversation: {};
	const newResponse: { result?: any } = ($NewResponse = {});
	const { result } = newResponse;
</script>

<section
	class=" w-full h-[90vh] md:px-40 col-span-10 md:col-span-8 bg-[#353441] flex flex-col justify-between items-center text-white"
>
	<div class="w-full h-full flex flex-col justify-start items-center">
		<h1 class="text-2xl sm:text-4xl font-bold text-center mt-5">
			¿Cómo puedo ayudarte?
		</h1>
		{#if conversation}
			<Message user="YOU" message={conversation.responses?.message} />
			<Message
				user="IA"
				message={conversation.responses?.responses.result}
			/>
		{/if}
		{#if $NewMessage}
			<Message user="YOU" message={$NewMessage} />
			{#if $isLoading}
				<Loader />
			{/if}
			{#if $Errors?.message}
				<MessageError message={$Errors.message} />
			{/if}
			{#if $NewResponse && !$Errors?.message}
				<Message user="IA" message={result} />
			{/if}
		{/if}
	</div>
	{#if form}
		<Form />
	{/if}
</section>
