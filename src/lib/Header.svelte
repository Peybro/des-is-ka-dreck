<script lang="ts">
	export let heading: string;
	import { cart } from '$lib/store';
</script>

<header>
	<a href="/"><h1>{heading}</h1></a>
	<a href="/warenkorb" class="cart-btn">Warenkorb ({$cart.length})</a>
</header>

<style lang="scss">
	header {
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: black;
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;

		h1 {
			margin: 0 1rem;
			color: white;
		}

		.cart-btn {
			margin: 1rem;
			color: white;
		}
	}
</style>
