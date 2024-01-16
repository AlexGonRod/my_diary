<script>
	import {BaseMessage} from '@lib/store'
	let message = null
</script>

<form
	action="/api/spell_check"
	method="POST"
	class="w-full px-10"
>
	<div class="mt-1">
		<div class="responses"></div>
		<textarea
			bind:value = {message}
			name="textarea"
			id="message"
			rows="4"
			class="resize-none block p-2.5 w-full text-sm lg:text-base  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Tu texto..."
		></textarea>
	</div>
	<div class="flex justify-end py-5">
		<button
			on:click={() => message && BaseMessage.set(true)}
			type="submit"
			class="button rounded-md bg-indigo-600 px-3 py-1.5 text-sm lg:text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Send
		</button>
	</div>
</form>
