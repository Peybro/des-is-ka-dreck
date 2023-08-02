<script lang="ts">
	import Header from '$lib/Header.svelte';
	export let data;
</script>

<Header heading={data.title} />
<main>
	<slot />
</main>

<style lang="scss" global>
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	a:link,
	a:visited {
		color: purple;
	}

	main {
		background-color: #ffff00;
		min-height: 100vh;
		padding: 1rem;
	}
</style>
