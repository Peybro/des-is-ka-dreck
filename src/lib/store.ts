import { writable } from 'svelte/store';

// export const divider = writable(4);
export const products = writable([
	{ title: 'Analadventures', price: 69, content: '<p>Test</p>', img: 'innsbruck-für-depperl.png' },
	{
		title: 'Innsbruck für Depperl',
		price: 24.95,
		content: '<p>Test 2</p>',
		img: 'innsbruck-für-depperl.png'
	}
]);
