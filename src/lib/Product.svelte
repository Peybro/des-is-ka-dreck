<script lang="ts">
	import type { Fabio, Product } from './types';
	import { page } from '$app/stores';
	import { cart } from '$lib/store';

	export let product: Product;
	export let fabio: Fabio | undefined = undefined;
</script>

<div class="product">
	<div>
		<img
			class="cover"
			src={(!$page.url.pathname.includes('produkte/') ? 'produkte/' : '') + 'Bilder/' + product.img}
			alt="Cover"
		/>
		{#if product.img.includes('keks') && fabio !== undefined}
			<h4>{fabio.name} (#{fabio.number})</h4>
			<h6>
				[{fabio.number % 2 === 0
					? 'gewöhnlich'
					: fabio.number % 3 === 0
					? 'außergewöhnlich'
					: fabio.number % 5 === 0
					? 'vereinzelt'
					: fabio.number % 7 === 0
					? 'extrem rar, Bruder'
					: fabio.number % 11 === 0
					? 'selten'
					: fabio.number % 13 === 0
					? 'unnormal selten'
					: fabio.number % 17 === 0
					? 'legendär'
					: 'häufig'}]
			</h6>
			{$cart.some((item) => item.img === product.img)
				? `Schon ${$cart.filter((item) => item.img === product.img).length}x`
				: 'Noch nicht'} gefunden.
		{/if}
	</div>
	<div class="info">
		<h2>{product.title}</h2>
		<div class="not-price">
			{#if $page.url.pathname.includes('produkte/') || $page.url.pathname.includes('warenkorb') || $page.url.pathname.includes('checkout')}
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
		// overflow: hidden;
		// font-size: small;

		.cover {
			width: 9rem;
			object-fit: scale-down;
			align-self: flex-start;
			border: 1px solid gray;
		}

		.info {
			padding-left: 1rem;
			padding-right: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			word-break: break-all;

			.price {
				margin-top: 2rem;
			}
		}
	}
</style>
