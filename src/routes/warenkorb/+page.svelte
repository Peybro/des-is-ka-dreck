<script lang="ts">
	import Cookies from 'js-cookie';

	import Product from '$lib/Product.svelte';
	import { cart } from '$lib/store';

	export let data;

	$: sum = $cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
</script>

<svelte:head>
	<title>kauf du Sau!</title>
</svelte:head>

<h2>Warenkorb</h2>

{#if $cart.length === 0}
	<p>Der Warenkorb ist leer.</p>
{:else}
	<div class="list">
		{#each [...new Set($cart)] as product, i}
			<div class="cart-item">
				<div>
					<a href="/produkte/{product.title}">
						<Product
							{product}
							fabio={product.img.includes('/keks/')
								? data.fabios.find(
										(fabio) =>
											fabio.number === parseInt(product.img.split('.png')[0].split('/keks/')[1])
								  )
								: undefined}
						/>
					</a>
				</div>
				<input
					disabled
					type="text"
					value="{$cart.filter((prod) => prod.title === product.title).length}x"
				/>
				<button
					class="remove-btn"
					on:click={() => {
						$cart = $cart.filter((_, index) => index !== i);
						if ($cart.length === 0) {
							Cookies.remove('allFabios');
						}
					}}>ein Exemplar entfernen</button
				>
			</div>
			<hr />
		{/each}

		{#if Cookies.get('allFabios')}
			<div class="all-found">
				<h1>Du hast alle Fabios gefunden und bist der größte Sammler dieser Galaxie!</h1>
				<h2>Herzlichen Glückwunsch im Namen aller <a href="/about">Autoren</a></h2>
			</div>
		{/if}

		<h3>Gesamt: {sum}€</h3>
		<a href="/checkout" class="buy-btn">Bestellen</a>
		<button
			class="remove-btn"
			on:click={() => {
				$cart = [];
				Cookies.remove('allFabios');
			}}>Warenkorb leeren</button
		>
	</div>
{/if}

<style lang="scss">
	h2 {
		margin-bottom: 1rem;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.cart-item {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;

			& > div {
				display: flex;
				gap: 1rem;
				align-items: center;

				a {
					text-decoration: none;
					color: black;
					width: 100%;
				}
			}

			input {
				width: 100%;
				text-align: center;
			}
		}
	}

	button,
	a.buy-btn {
		padding: 0.6rem;
		color: white;
		cursor: pointer;
		width: 100%;
		// border-radius: 0.3rem;
		border: 1px solid black;
		text-align: center;

		&.remove-btn {
			background-color: red;
		}

		&.buy-btn {
			background-color: lightgreen;
			color: black;
		}
	}

	.all-found {
		background-color: pink;
		color: black;
		padding: 0.5rem;
	}
</style>
