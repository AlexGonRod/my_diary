<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	export let message: string = '';
</script>

<div class="flex flex-col text-base gap-3 my-5 md:px-5 lg:px-1 xl:px-5 w-[90%]">
	<div class="flex relative">
		<div>
			<div class="pt-0.5">
				<div
					class="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center rounded-full"
				>
					<div class="relative flex font-bold">IA</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative flex">
		<div class="gap-1 md:gap-3">
			<div class="flex flex-grow max-w-full">
				<div
					class="min-h-[20px] text-message flex items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto"
				>
					{#if message}
						<Alert color="red">
							<span class="font-medium">Danger alert!</span>
							{message}
						</Alert>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
