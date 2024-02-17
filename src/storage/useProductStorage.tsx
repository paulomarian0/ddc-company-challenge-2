import { create } from "zustand";
import { Product } from "../types";

interface IProductStorage {
	products: Product[];
	addProduct: (product: Product) => void;
	removeProduct: (id: number) => void;
}

const useProductStorage = create<IProductStorage>((set) => ({
	products: [
		{
			id: 1,
			categoryId: 1,
			name: "Notebook",
			price: 3000,
			description: "Notebook XYZ, tela 15 polegadas",
		},
		{
			id: 2,
			categoryId: 2,
			name: "Livro de TypeScript",
			price: 120,
			description: "Aprenda TypeScript do básico ao avançado",
		},
		{
			id: 3,
			categoryId: 3,
			name: "Cadeira Gamer",
			price: 1500,
			description: "Cadeira gamer confortável",
		},
	],
	addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
	removeProduct: (id: number) => set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
}));

export { useProductStorage };
