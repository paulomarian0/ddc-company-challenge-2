import { Product } from "@/types";
import { create } from "zustand";

interface CartItem extends Product {
	quantity: number;
	total: number;
}

interface ICartStorage {
	cartList: CartItem[];
	addToCart: (item: CartItem) => void;
	clearCart: () => void;
	addQuantity: (id: number) => void;
	removeQuantity: (id: number) => void;
	removeItem: (id: number) => void;
}

const useCartStorage = create<ICartStorage>((set) => ({
	cartList: [],
	addToCart: (item) => set((state) => ({ cartList: [...state.cartList, item] })),
	clearCart: () => set({ cartList: [] }),
	addQuantity: (id: number) =>
		set((state) => {
			const updatedCart = state.cartList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity + 1,
						total: item.total + item.price,
					};
				}
				return item;
			});

			return { cartList: updatedCart };
		}),
	removeQuantity: (id: number) =>
		set((state) => {
			const updatedCart = state.cartList.map((item) => {
				if (item.id === id) {
					const newQuantity = item.quantity - 1;
					if (newQuantity < 0) {
						return item; // Do nothing if quantity is already 0
					}
					return {
						...item,
						quantity: newQuantity,
						total: item.total - item.price,
					};
				}
				return item;
			});

			return { cartList: updatedCart };
		}),
	removeItem: (id: number) =>
		set((state) => {
			const updatedCart = state.cartList.filter((item) => item.id !== id);
			return { cartList: updatedCart };
		}),
}));

export { useCartStorage };
