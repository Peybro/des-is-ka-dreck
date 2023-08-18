<script lang="ts">
	import ProdList from '$lib/ProdList.svelte';

	export let data;
</script>

<svelte:head>
	<title>fabio stinkt</title>
</svelte:head>

<ProdList products={data.products} />
