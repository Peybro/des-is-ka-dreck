<script lang="ts">
	export let product: { title: string; price: number; img: string; content: string };
	import { page } from '$app/stores';

	console.log($page.url.pathname);
</script>

<div class="product">
	<img
		class="cover"
		src={($page.url.pathname === '/' ? 'produkte/Bilder/' : 'Bilder/') + product.img}
		alt="Cover"
	/>
	<div class="info">
		<h2>{product.title}</h2>
		<h3>{product.price}€</h3>
		{@html product.content}
	</div>
</div>

<style lang="scss">
	.product {
		border: 1px solid black;
		padding: 1rem;
		display: flex;
		margin-top: 1rem;
		margin-bottom: 1rem;

		.cover {
			width: 100px;
		}

		.info {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
