<script lang="ts">
	import ProdList from '$lib/ProdList.svelte';

	export let data;
</script>

<ProdList products={data.products} />
