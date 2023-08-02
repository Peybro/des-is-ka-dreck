import { writable } from 'svelte/store';

type Product = {
    title: string;
    price: number;
    content: string;
    img: string;
}

// export const divider = writable(4);
export const products = writable([
	{ title: 'Analadventures', price: 69, content: '<p>Test</p>', img: 'innsbruck-für-depperl.png' },
	{
		title: 'Innsbruck für Depperl',
		price: 24.95,
		content: '<p>Test 2</p>',
		img: 'innsbruck-für-depperl.png'
	}
] as Product[]);

export const cart = writable([] as Product[]);
