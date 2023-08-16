<script lang="ts">
	import Product from '$lib/Product.svelte';
	import type { Product as ProductType } from '$lib/types';

	export let products: ProductType[];
</script>

<h2>Bücher</h2>

{#each products as product}
	<a href="produkte/{product.title}">
		<Product {product} />
	</a>
{/each}
