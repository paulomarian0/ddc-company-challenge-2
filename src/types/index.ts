export type Category = {
	id: number;
	name: string;
};

export type Product = {
	id: number;
	categoryId: number;
	name: string;
	price: number;
	description: string;
};

export type CartItem = {
	productId: number;
	quantity: number;
};

export type State = {
	products: Product[];
	categories: Category[];
	productCart: CartItem[];
};
