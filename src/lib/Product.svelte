<script lang="ts">
	export let product: { title: string; price: number; img: string; content: string };
	import { page } from '$app/stores';
</script>

<div class="product">
	<img
		class="cover"
		src={(!$page.url.pathname.includes('produkte/') ? 'produkte/' : '') + 'Bilder/' + product.img}
		alt="Cover"
	/>
	<div class="info">
		<h2>{product.title}</h2>
		<div class="not-price">
			{#if $page.url.pathname.includes('produkte/')}
				{@html product.content}
			{/if}
		</div>
		<h3 class="price">{product.price}€</h3>
	</div>
</div>

<style lang="scss" scoped>
	.product {
		border: 1px solid black;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		margin-bottom: 1rem;
		text-decoration: none;
		background-color: aqua;
		width: 100%;

		.cover {
			width: 10rem;
			object-fit: scale-down;
			align-self: flex-start;
		}

		.info {
			padding-left: 1rem;
			padding-right: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.price {
				margin-top: 2rem;
			}
		}
	}
</style>
