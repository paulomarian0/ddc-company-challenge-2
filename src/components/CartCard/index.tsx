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
	const { cartList, removeQuantity, addQuantity } = useCartStorage();

	const handleAddToCart = (id: number) => {
		const product = cartList.find((item) => item.id === id);
		if (!product) return;
		addQuantity(id);
	};

	return (
		<div>
			<h3 className="text-xl font-bold">{name}</h3>
			<p className="text-gray-600">Preço: R${price}</p>
			<p className="text-gray-600">Descrição: {description}</p>
			<p>quantidade: {quantity}</p>
			<p>total: {total}</p>
			<button className="text-red-300" onClick={() => handleAddToCart(id)}>
				+
			</button>
			<button className="text-red-300" onClick={() => removeQuantity(id)}>
				-
			</button>
		</div>
	);
};

export { CartCard };
