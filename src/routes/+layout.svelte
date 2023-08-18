<script lang="ts">
	import Cookies from 'js-cookie';

	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	import { cart } from '$lib/store';

	export let data;

	$: {
		if (
			$cart.some((item) => item.img.endsWith('keks/0.png')) &&
			$cart.some((item) => item.img.endsWith('keks/1.png')) 
			// &&
			// $cart.some((item) => item.img.endsWith('keks/2.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/3.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/4.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/5.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/6.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/7.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/8.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/9.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/10.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/11.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/12.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/13.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/14.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/15.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/16.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/17.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/18.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/19.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/20.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/21.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/22.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/23.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/24.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/25.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/26.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/27.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/28.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/29.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/30.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/31.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/32.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/33.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/34.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/35.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/36.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/37.png')) &&
			// $cart.some((item) => item.img.endsWith('keks/38.png'))
		) {
			if (!Cookies.get('allFabios')) {
				alert(
					'Du hast alle Fabios gefunden! Du bist wahrlich der größte Fabio-Sammler dieser Galaxie!! Du kannst nun mit deinem Cookie der das beweist angeben... Du hast ihn dir verdient! (Cookie wurde gesetzt)'
				);
				Cookies.set(
					'allFabios',
					'Wow! Du hast alle Fabios gefunden! Du bist wahrlich der größte Fabio-Sammler dieser Galaxie!! Hier ist dein Cookie.'
				);
			}
		}
	}
</script>

<Header heading={data.title} />
<Nav />

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: sans-serif;
	}

	main {
		background-color: #ffff00;
		min-height: 100vh;
		padding: 1rem;
	}
</style>
