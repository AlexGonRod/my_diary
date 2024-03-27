<script lang="ts">
	import { Label, Input, Helper } from 'flowbite-svelte';
	import { SetNewResponse, SetNewError, Errors } from '@lib/store/store';
	export let Submit;
	export let errors;

	function resetValues() {
		errors = { message: '' };
		SetNewError(errors);
		SetNewResponse('');
	}

	async function submit(e: SubmitEvent) {
		resetValues(e);
		await Submit(e);
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
