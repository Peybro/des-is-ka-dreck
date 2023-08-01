<script lang="ts">
	import { divider } from '$lib/store';
	export let heading: string;
</script>

<header>
	<h1>{heading}</h1>
	<div class="status-bar">
		<button on:click={() => $divider++}>+</button>
		<h1>{$divider}</h1>
		<button on:click={() => $divider--}>-</button>
	</div>
</header>

<style lang="scss">
	header {
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: brown;

		h1 {
			margin: 0 1rem;
			color: white;
		}

		.status-bar {
			display: flex;
			justify-content: center;
			align-items: center;

			button {
				background-color: burlywood;
				border: none;
				padding: 1rem;
				min-width: 3rem;
				color: #333;
				font-size: larger;
				cursor: pointer;
			}
		}
	}
</style>
