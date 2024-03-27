<script lang="ts">
	import Message from '@components/Message.svelte';
	import Card from '@components/Card.svelte';

    export let data = {}
</script>

<Message user="IA" message={data?.result} />
<Card
	title="Palabras"
	types="list"
	countChangeWords={data?.count_changed_words}
	countCharacters={data?.count_characters}
	countWords={data?.count_words}
/>
