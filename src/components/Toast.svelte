<script lang="ts">
	import { Toast } from 'flowbite-svelte';
	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
	export let message: string;
</script>

<Toast class="absolute top-0 z-10" color="orange">
	<svelte:fragment slot="icon">
		<ExclamationCircleSolid class="w-5 h-5" />
		<span class="sr-only">Warning icon</span>
	</svelte:fragment>
	{message}
</Toast>
