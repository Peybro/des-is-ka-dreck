<script lang="ts">
	let duKek = false;

	$: if (duKek)
		alert('Psssst, wusstest du schon, dass du durch ein falsches Buch Fabios sammeln kannst!? 🤫');
</script>

<footer>
	{#if duKek}
		<img
			src="https://www.deborahhalverson.com/authorsite/wp-content/uploads/2010/07/dummies_logo_transparent-200x200.png"
			alt="Dummie"
			class="dummie-img"
		/>
	{/if}

	<h3>© Des is ka Dreck! Verlag</h3>
	<h3>Alle Rechte vorbehalten... <button on:click={() => (duKek = !duKek)}>du kek</button></h3>
</footer>

<style lang="scss" scoped>
	footer {
		width: 100%;
		height: 200px;
		background-color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;

		button {
			background-color: transparent;
			border: none;
			color: white;
			font-size: 1rem;
			cursor: pointer;
			font-weight: bolder;
		}

		img {
			position: absolute;
			margin-top: -400px;
			margin-left: -200px;
		}
	}
</style>
