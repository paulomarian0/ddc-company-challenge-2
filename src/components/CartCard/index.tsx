import { useCartStorage } from "@/storage/useCartStorage";

interface ICartCardProps {
	id: number;
	name: string;
	price: number;
	description: string;
	quantity: number;
	total: number;
}

const CartCard = ({ id, name, price, description, quantity, total }: ICartCardProps) => {
	const { cartList, removeQuantity, addQuantity, removeItem } = useCartStorage();

	const handleAddToCart = (id: number) => {
		const product = cartList.find((item) => item.id === id);
		if (!product) return;
		addQuantity(id);
	};

	const handleRemoveFromCart = (id: number) => {
		removeItem(id);
	};

	return (
		<div className="border rounded-md p-4 mb-4 overflow-auto">
			<h3 className="text-xl font-bold mb-2">{name}</h3>
			<p className="text-gray-600 mb-2">Preço: R${price.toFixed(2)}</p>
			<p className="text-gray-600 mb-2">Descrição: {description}</p>
			<div className="flex items-center mb-2">
				<p className="mr-2">Quantidade:</p>
				<p className="font-semibold">{quantity}</p>
			</div>
			<div className="flex items-center mb-4">
				<p className="mr-2">Total:</p>
				<p className="font-semibold">R${total.toFixed(2)}</p>
			</div>
			<div className="flex justify-between">
				<div className="flex gap-4">
					<button
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
						onClick={() => handleAddToCart(id)}
					>
						+
					</button>
					<button
						className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
						onClick={() => removeQuantity(id)}
					>
						-
					</button>
				</div>
				<button
					className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
					onClick={() => handleRemoveFromCart(id)}
				>
					Remover o produto
				</button>
			</div>
		</div>
	);
};

export { CartCard };
