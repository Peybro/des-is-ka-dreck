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
					<Product {product} />
					<button
						class="remove-btn"
						on:click={() => {
							$cart = $cart.filter((_, index) => index !== i);
						}}>X</button
					>
				</div>
				<input
					disabled
					type="number"
					value={$cart.filter((prod) => prod.title === product.title).length}
				/>
			</div>
		{/each}
		<hr />
		<h3>Gesamt: {sum}€</h3>
	</div>
{/if}

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.cart-item {
			button {
				background-color: red;
				border: none;
				padding: 0.6rem;
				color: white;
			}

			& > div {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			input {
				width: 100%;
				text-align: center;
			}
		}
	}
</style>
