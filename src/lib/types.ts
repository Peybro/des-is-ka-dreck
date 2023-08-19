type Person = {
	name: string;
};

export type Product = {
	title: string;
	price: number;
	content: string;
	img: string;
};

export type Author = Person & {
	mail: string;
	img: {
		extern: boolean;
		src: string;
	};
	bio: string;
};

export type Fabio = Person & {
	number: number;
	rarity: string;
};
