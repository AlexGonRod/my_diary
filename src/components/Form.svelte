<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';
	import { supabase } from '@lib/db/supabase';
	import {
		SetNewMessage,
		SetNewResponse,
		SetNewError,
		Errors,
		isLoading,
	} from '@lib/store/store';
	import { sendDataToFetch } from '@lib/utils/sendDataToFetch';

	let errors: {
		message?: string | undefined;
		formMessage?: string | undefined;
	} = {};

	async function saveData(results: any) {
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

	function resetValues() {
		errors = { message: '' };
		SetNewError(errors);
		SetNewResponse('');
	}

	async function submit(e: SubmitEvent) {
		resetValues();
		const text = e.target?.message?.value;
		if (text.length < 1) {
			errors.formMessage = 'Message is required';
			SetNewError(errors);
		} else {
			try {
				isLoading.set(true);
				const result: { status?: string; message?: string } =
					await sendDataToFetch(text);

				if (result.status !== 'success') {
					errors.message = result.message;
					SetNewError(errors);
				}

				SetNewMessage(text);
				if (!$Errors) {
					await saveData({ text, result: result });
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

<form
	on:submit|preventDefault={submit}
	class="relative w-full flex px-10 justify-center flex-col"
>
	<Label for="message" class="block mb-2 text-primary-50">Texto</Label>
	<Input id="message" name="message" placeholder="Escribe lo que necesites" />
	{#if $Errors?.formMessage}
		<Helper class="text-sm mt-2" color="red"
			><span class="font-medium">Algo falla! </span>
			{$Errors?.formMessage}</Helper
		>
	{/if}
</form>
