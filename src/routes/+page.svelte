<script lang="ts">
	import ProdList from '$lib/ProdList.svelte';
</script>

<section>
	<h2>Unser WOW! Angebot:</h2>
	<a href="/produkte/Innsbruck%20für%20Depperl"
		><img src="angebote/depperlbuch.png" alt="WOW Angebot" /></a
	>
</section>

<section>
	<ProdList />
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
