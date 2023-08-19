<script lang="ts">
	import { page } from '$app/stores';
	import { cart } from '$lib/store';
	import Product from '$lib/Product.svelte';
	import type { Product as ProductType } from '$lib/types';

	export let data;

	$: product = data.products.find((product: ProductType) => {
		return product.title == $page.params.produkt;
	}) || {
		title: decodeURI($page.url.pathname.toString().split('/produkte/')[1]),
		price: $page.url.pathname.toString().length,
		content: $cart.some((item) => item.content.startsWith('<input type="hidden"'))
			? `<input type="hidden" value="0"/><h2>Ein Wildes Fabio!</h2><h3>Woohoo ein neues Fabio!</h3><p>Schnell pack es in den Warenkorb zu den anderen!!</p>`
			: `<input type="hidden" value="${
					$cart.filter((item) => item.content.startsWith('<input type="hidden"')).length + 1
			  }"/><h1>Gotta catch 'em all!'</h1><h2>Du hast ein wildes Fabio entdeckt!</h2><p>Packe ihn in deinen Warenkorb und sammle alle Fabios...</p><h3>Werde der GRÖßTE Fabio Sammler der Galaxie!!!!</h3>`,
		img: `/keks/${data.randomInt}.png`
	};

	$: fabio = product.img.includes('/keks/')
		? data.fabios.find((fabio) => fabio.number === data.randomInt)
		: {
				name: 'Fabio',
				number: 0,
				rarity: 'dummy'
		  };

	$: instancesInCart = $cart.filter((prod) => prod.title === product.title).length;
</script>

<svelte:head>
	<title>{product.price}€? WOW!</title>
</svelte:head>

<Product {product} {fabio} />
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
