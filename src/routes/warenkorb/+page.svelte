<script lang="ts">
	import Product from '$lib/Product.svelte';
	import { cart } from '$lib/store';

    $: sum = $cart.reduce((acc, curr) => acc + curr.price, 0);
</script>

<h2>Warenkorb</h2>
<div class="list">
	{#each $cart as product, i}
		<div class="cart-item">
			<Product {product} />
			<button class="remove-btn" on:click={() => {
                $cart = $cart.filter((_, index) => index !== i);
            }}>X</button>
		</div>
	{/each}
    <hr>
    <h3>Gesamt: {sum}€</h3>
</div>

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
