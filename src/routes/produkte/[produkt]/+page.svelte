<script lang="ts">
	import { page } from '$app/stores';
	import { products, cart } from '$lib/store';
	import Product from '$lib/Product.svelte';

	$: product = $products.filter((product) => {
		return product.title == $page.params.produkt;
	})[0];
</script>

<Product {product} />
<button class="buy-btn" on:click={() => ($cart = [...$cart, product])}>in Warenkorb legen</button>

<style lang="scss">
	.buy-btn {
		margin-top: 1rem;
		padding: 0.5rem;
		border: 1px solid black;
		background-color: white;
		cursor: pointer;
	}
</style>
