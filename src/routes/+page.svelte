<script lang="ts">
	import { products } from '$lib/store';
	import Product from '$lib/Product.svelte';
</script>

<section>
	<h2>Angebote:</h2>
	{#each $products as product}
		<a href="produkte/{product.title}">
			<Product {product}/>
		</a>
	{/each}
</section>

<style lang="scss">
	section {
		a {
			display: block;
			margin-bottom: 1rem;
		}
	}
</style>
