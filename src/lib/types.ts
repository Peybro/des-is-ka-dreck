export type Product = {
	title: string;
	price: number;
	content: string;
	img: string;
};

export type Author = {
	name: string;
	mail: string;
	img: {
		extern: boolean;
		src: string;
	};
	bio: string;
};
