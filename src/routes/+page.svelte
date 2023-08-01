<script lang="ts">
	import { divider, listLength } from '$lib/store';
</script>

{#each Array($listLength).fill(0) as _, i}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="row"
		class:green={(i + 1) % $divider === 0}
		class:red={(i + 1) % $divider !== 0}
		on:click={() => ($divider = i + 1)}
	>
		<h2>{i + 1}</h2>
	</div>
{/each}

<style lang="scss">
	.row {
		display: flex;
		justify-content: center;

		&.green {
			background-color: green;
		}

		&.red {
			background-color: red;
		}

		h2 {
			padding: 1rem;
		}
	}
</style>
