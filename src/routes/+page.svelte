<script lang="ts">
	import ProdList from '$lib/ProdList.svelte';

	export let data;
</script>

<svelte:head>
	<title>Des is ka Dreck!</title>
</svelte:head>

<section>
	<h2>Unser WOW! Angebot:</h2>
	<a href="/produkte/Innsbruck%20für%20Depperl"
		><img src="angebote/depperlbuch.png" alt="WOW Angebot" /></a
	>
</section>

<section>
	<ProdList products={data.products} />
</section>

<style lang="scss">
	section {
		a {
			display: block;
			margin-bottom: 1rem;

			& > img {
				max-height: 85vh;
				max-width: 100%;
				object-fit: scale-down;
			}
		}
	}
</style>
