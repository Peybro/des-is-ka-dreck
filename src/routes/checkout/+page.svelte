<script lang="ts">
	import Product from '$lib/Product.svelte';

	import { cart } from '$lib/store';

	export let data;

	let bestellt = false;

	let name = '';
	let street = '';
	let number = '';
	let plz = '';
	let city = '';

	function randomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let rndNr = randomInt(1, 39);

	let product = {
		title: 'Hier ist noch ein einzigartiges Fabio für deine Sammlung!',
		content:
			'<p>Sammle wilde und einzigartige Fabios und werde der erfolgreichste Fabio-Sammler der Galaxie!</p>',
		img: `/keks/${rndNr}.png`,
		price: 420
	};
</script>

{#if bestellt}
	<div class="bestellt">
		<div>
			<h1>Ok Brudi, vielen Dank für deine Bestellung!</h1>
			<p>Dein Paket ist auf dem Weg an die <b>richtige</b> Adresse.</p>

			<Product {product} fabio={data.fabios.find((fabio) => fabio.number === rndNr)} />
			<button class="buy-btn" on:click={() => ($cart = [product])}>in Warenkorb legen</button>
		</div>
		<a href="/" class="back-link">zurück zur Startseite</a>
	</div>
{:else}
	<div class="unbestellt">
		<h2>Ausgewähltes Produkt:</h2>
		<div class="input-group">
			<input type="checkbox" checked />
			<Product product={data.products[2]} fabio={undefined} />
		</div>

		<h2>Liefern an:</h2>
		<div class="input-form">
			<label for="nameInput">Name:</label>
			<input type="text" id="nameInput" bind:value={name} />
		</div>

		<div class="input-group">
			<div class="input-form">
				<label for="streetInput">Straße:</label>
				<input type="text" id="streetInput" bind:value={street} />
			</div>

			<div class="input-form">
				<label for="numberInput">Hausnummer:</label>
				<input type="number" id="numberInput" bind:value={number} />
			</div>
		</div>

		<div class="input-group">
			<div class="input-form">
				<label for="plzInput">PLZ:</label>
				<input type="number" id="plzInput" bind:value={plz} />
			</div>

			<div class="input-form">
				<label for="cityInput">Stadt:</label>
				<input type="text" id="cityInput" bind:value={city} />
			</div>
		</div>

		<button
			on:click={() => {
				bestellt = true;
				$cart = [];
			}}
			class="order-btn"
			class:mute={name === '' || street === '' || number === '' || plz === '' || city === ''}
			>Bestellen</button
		>
	</div>
{/if}

<style lang="scss" scoped>
	.unbestellt {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.input-group {
		display: flex;
		gap: 1rem;
		justify-content: space-between;

		input[type='checkbox'] {
			pointer-events: none;
		}
	}

	.input-form {
		display: flex;
		flex-direction: column;
		width: 100%;

		input {
			padding: 0.5rem;
		}
	}

	.order-btn,
	.buy-btn {
		padding: 0.6rem;
		color: white;
		cursor: pointer;
		width: 100%;
		border: 1px solid black;
		text-align: center;
		background-color: lightgreen;
		color: black;

		&.mute {
			background-color: lightgray;
			cursor: not-allowed;
		}
	}

	.bestellt {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
