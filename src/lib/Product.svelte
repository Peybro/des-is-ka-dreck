<script lang="ts">
	export let product: { title: string; price: number; img: string; content: string };
	import { page } from '$app/stores';

	console.log($page.url.pathname);
</script>

<div class="product">
	<img
		class="cover"
		src={($page.url.pathname === '/' || $page.url.pathname === '/warenkorb'
			? 'produkte/Bilder/'
			: 'Bilder/') + product.img}
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
		margin-bottom: 1rem;
		text-decoration: none;
        background-color: aqua;

		.cover {
			width: 100px;
            object-fit: scale-down;
		}

		.info {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
