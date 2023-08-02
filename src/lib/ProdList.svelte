<script lang="ts">
	import { products } from '$lib/store';
	import Product from '$lib/Product.svelte';
</script>

<h2>Bücher</h2>

{#each $products as product}
	<a href="produkte/{product.title}">
		<Product {product} />
	</a>
{/each}
