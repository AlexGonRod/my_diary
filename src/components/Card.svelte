<script lang="ts">
	import { Card } from 'flowbite-svelte';


	export let title: string = '';
	export let content: string = '';
	export let countChangeWords: number;
	export let countCharacters: number;
	export let countWords: number;

	export let types: string = 'text';
</script>

<Card horizontal class="max-w-[85%]">
	{#if types !== 'list'}
		<h5
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
		>
			{title}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{content}
		</p>
	{/if}
    <div class='flex gap-12 justify-center w-full bg-transparent rounded-lg py-2 border border-gray-300 md:border-none'>
        <div class='flex flex-col gap-0.5 items-center'>
            <span class='font-bold text-base sm:text-1xl text-gray-300 uppercase'>Caracteres</span>
            <span class='font-semibold text-sm sm:text-xl text-gray-400'>{countCharacters}</span>
        </div>
        <div class='flex flex-col gap-0.5 items-center'>
            <span class='font-bold text-base sm:text-1xl text-gray-300 uppercase'>Palabras</span>
            <span class='font-semibold text-sm sm:text-xl text-gray-400'>{countWords}</span>
        </div>
        <div class='flex flex-col gap-0.5 items-center'>
            <span class='font-bold text-base sm:text-1xl text-gray-300 uppercase'>Palabras cambiadas</span>
            <span class='font-semibold text-sm sm:text-xl text-gray-400'>{countChangeWords}</span>
        </div>
    </div>
</Card>
