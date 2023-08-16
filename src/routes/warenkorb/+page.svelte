<script lang="ts">
	import Product from '$lib/Product.svelte';
	import { cart } from '$lib/store';

	$: sum = $cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
</script>

<h2>Warenkorb</h2>
{#if $cart.length === 0}
	<p>Der Warenkorb ist leer.</p>
{:else}
	<div class="list">
		{#each [...new Set($cart)] as product, i}
			<div class="cart-item">
				<div>
					<a href="/produkte/{product.title}">
						<Product {product} />
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
					}}>ein Exemplar entfernen</button
				>
			</div>
			<hr />
		{/each}
		<h3>Gesamt: {sum}€</h3>
	</div>
{/if}

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.cart-item {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;

			button {
				background-color: red;
				border: none;
				padding: 0.6rem;
				color: white;
				cursor: pointer;
				width: 100%;
				// border-radius: 0.3rem;
				border: 1px solid black;
			}

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
</style>
