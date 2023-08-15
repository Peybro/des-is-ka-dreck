<script lang="ts">
	import { page } from '$app/stores';
	import { products, cart } from '$lib/store';
	import Product from '$lib/Product.svelte';

	$: product = $products.filter((product) => {
		return product.title == $page.params.produkt;
	})[0];
	$: instancesInCart = $cart.filter((prod) => prod.title === product.title).length;
</script>

<Product {product} />
<button class="buy-btn" on:click={() => ($cart = [...$cart, product])}
	>in Warenkorb legen {#if instancesInCart > 0}{`(bereits ${instancesInCart} Exemplar${
			instancesInCart > 1 ? 'e' : ''
		})`}{/if}</button
>

{#if $cart.some((prod) => prod.title === product.title)}
	<button
		class="remove-btn"
		on:click={() => {
			$cart = $cart.filter((prod) => prod.title !== product.title);
		}}>alle Exemplare aus Warenkorb entfernen</button
	>
{/if}

<style lang="scss">
	button {
		margin-top: 1rem;
		padding: 0.5rem;
		border: 1px solid black;
		cursor: pointer;
		width: 100%;

		&.buy-btn {
			background-color: white;
		}

		&.remove-btn {
			background-color: red;
			color: white;
		}
	}
</style>
