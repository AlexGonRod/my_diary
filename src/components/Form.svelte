<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';
	import { supabase } from '@lib/supabase';
	import {
		SetNewMessage,
		SetNewResponse,
		SetNewError,
		Errors,
		isLoading,
	} from '@lib/store';
	import { fetchData } from '@lib/fetchData';

	let errors = { message: '' };

	async function saveData(results: any) {
		try {
			const { text, result } = results;

			const { data, error } = await supabase
				.from('messages')
				.upsert({ responses: { messages: text, responses: result } })
				.select();
			if (error) {
				errors.message = error.message;
				SetNewError(errors);
			}

			const {responses} = data[0].responses;

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
		const text = e.target?.message.value;
		if (text.length < 1) {
			errors.message = 'Message is required';
			SetNewError(errors);
		} else {
			SetNewMessage(text);
			try {
				isLoading.set(true);
				const result = await fetchData(text);
				if (result?.status !== 'success')
					errors.message = result.message;
				SetNewError(errors)

				await saveData({ text, result: result });
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
	{#if $Errors?.form}
		<Helper class="text-sm mt-2" color="red"
			><span class="font-medium">Algo falla! </span>
			{$Errors.form}</Helper
		>
	{/if}
</form>
