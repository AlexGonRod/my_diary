<script lang="ts">
	import Loader from '@components/Loader.svelte';
	import Form from '@components/Form.svelte';
	import Response from '@components/Response.svelte';
	import Message from '@components/Message.svelte';
	import MessageError from '@components/MessageError.svelte';
	import { supabase } from '@lib/db/supabase';
	import {
		SetNewError,
		NewMessage,
		NewResponse,
		SetNewResponse,
		isLoading,
		Errors,
	} from '@lib/store/store';

	let errors: {
		message?: string | undefined;
		formMessage?: string | undefined;
	} = {};

	import { sendDataToFetch } from '@lib/utils/sendDataToFetch';
	export let form: boolean = true;
	export let conversation: {};

	export async function saveData(results: any) {
		try {
			const { text, result } = results;
			const { data, error } = await supabase
				.from('messages')
				.upsert({ responses: { message: text, responses: result } })
				.select();
			if (error) {
				errors.message = error.message;
				SetNewError(errors);
			}

			const { responses } = data[0].responses;

			SetNewResponse(responses);
		} catch (error) {
			if (error instanceof Error) {
				errors.message = error.message;
				SetNewError(errors);
			}
		}
		return { status: 'success' };
	}

	export async function submit(e: SubmitEvent) {
		const text = e.target?.message?.value;
		if (text.length < 1) {
			errors.formMessage = 'Message is required';
			SetNewError(errors);
		} else {
			try {
				isLoading.set(true);
				const result: { status?: string; message?: string} =
					await sendDataToFetch(text);

				if (result.status !== 'success') {
					errors.message = result.message;
					SetNewError(errors);
				}
				SetNewMessage(text);
				if (!$Errors.message && !$Errors.formMessage) {
					await saveData({ text, result });
				}
			} catch (error) {
				if (error instanceof Error) {
					errors.message = error.message;
					SetNewError(errors);
				}
			} finally {
				isLoading.set(false);
			}
		}
	}

</script>

<section
	class=" relative w-full h-[90vh] md:px-40 col-span-10 md:col-span-8 bg-[#353441] flex flex-col justify-between items-center text-white"
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
				<Response data={$NewResponse} />
			{/if}
		{/if}
	</div>
	{#if form}
		<Form Submit={submit} {errors}/>
	{/if}
</section>
