<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	{#each ['Produkte', 'Angebot', 'About'] as site}
		<a
			href="/{site === 'Bücher' ? 'produkte' : site.toLowerCase()}"
			class:active={$page.url.toString().endsWith(site.toLowerCase())}
			>{site === 'Produkte' ? 'Bücher' : site === 'About' ? 'Über Uns' : site}</a
		>
	{/each}
</div>

<style lang="scss" scoped>
	div {
		background-color: black;
		padding: 0 0.5rem 1rem 1rem;
		display: flex;
		gap: 1rem;
	}

	a:link,
	a:visited {
		color: white;
		text-decoration: none;
	}

	.active {
		color: red !important;
	}
</style>
