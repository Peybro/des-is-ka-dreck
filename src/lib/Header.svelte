<script lang="ts">
	export let heading: string;
</script>

<header>
	<a href="/"><h1>{heading}</h1></a>
</header>

<style lang="scss">
	header {
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: black;
		position: sticky;
		top: 0;

		h1 {
			margin: 0 1rem;
			color: white;
		}
	}
</style>
