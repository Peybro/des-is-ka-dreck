<script lang="ts">
	import Header from '$lib/Header.svelte';
	export let data;
</script>

<Header heading={data.title} />
<slot />

<style lang="scss" global>
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}
</style>
