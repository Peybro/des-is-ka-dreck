<script lang="ts">
	import Product from '$lib/Product.svelte';
	import { cart } from '$lib/store';

	$: sum = $cart.reduce((acc, curr) => acc + curr.price, 0);
</script>

<h2>Warenkorb</h2>
{#if $cart.length === 0}
	<p>Der Warenkorb ist leer.</p>
{:else}
	<div class="list">
		{#each $cart as product, i}
			<div class="cart-item">
				<button
					class="remove-btn"
					on:click={() => {
						$cart = $cart.filter((_, index) => index !== i);
					}}>X</button
				>
				<Product {product} />
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
			display: flex;
			gap: 1rem;
			align-items: center;
		}
	}
</style>
