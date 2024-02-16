import { create } from "zustand";
import { Category } from "../types";

interface ICategoryStorage {
	categories: Category[];
	addCategory: (category: Category) => void;
}

const useCategoryStorage = create<ICategoryStorage>((set) => ({
	categories: [
		{
			id: 1,
			name: "Eletrônicos",
		},
		{
			id: 2,
			name: "Livros",
		},
		{
			id: 3,
			name: "Móveis",
		},
	],
	addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
}));

export { useCategoryStorage };
