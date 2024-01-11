<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Product from '$lib/Product.svelte';
	import type { Category, Product as ProductType } from '$lib/types';

	export let products: ProductType[];

	type Filter = 'all' | Category;
	let filter: Filter = 'all';

	let categories = ['all', ...new Set(products.map((p) => p.category))];

	function setFilter(category: Filter) {
		filter = category;
	}

	function stringToCategory(category: string): Category {
		return category as Category;
	}

	$: filteredProducts = filter === 'all' ? products : products.filter((p) => p.category === filter);
</script>

<h2>Bücher</h2>

<div class="filter">
	Filter:
	{#each categories as category}
		<button
			class:active={filter === category}
			on:click={() => setFilter(stringToCategory(category))}>{category}</button
		>
	{/each}
</div>

{#each filteredProducts.sort((a, b) => a.title.localeCompare(b.title)) as product}
	<a href="produkte/{product.title}">
		<Product {product} />
	</a>
{/each}

<style lang="scss">
	.filter {
		display: flex;
		gap: 0.5em;
		margin: 0.2rem 0;

		button {
			padding: 0.2rem 0.5rem;
			border: 1px solid black;
			border-radius: none;
			background: white;
			cursor: pointer;

			&.active {
				background: red;
				color: white;
			}
		}
	}
</style>
