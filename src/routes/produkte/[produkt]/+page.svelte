<script lang="ts">
	// export let product: { title: string; price: number; img: string };
	import { page } from '$app/stores';
	import { products } from '$lib/store';
	import Product from '$lib/Product.svelte';

	let product = $products.filter((product) => {
		return product.title == $page.params.produkt;
	})[0];
</script>

<Product {product} />
