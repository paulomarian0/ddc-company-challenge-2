import { useCartStorage } from "@/storage/useCartStorage";
import { Product } from "@/types";

interface IProductCardProps {
	id: number;
	categoryId: number;
	name: string;
	price: number;
	description: string;
}

const ProductCard = ({ id, categoryId, name, price, description }: IProductCardProps) => {
	const { cartList, addToCart, addQuantity } = useCartStorage();

	const handleAddToCart = (data: Product) => {
		if (cartList.some((item) => item.name === data.name)) {
			addQuantity(data.id);
			return;
		}

		addToCart({
			...data,
			quantity: 1,
			total: data.price,
		});
	};

	return (
		<div className="bg-gray-200 p-4 rounded my-6">
			<h3 className="text-xl font-bold">{name}</h3>
			<p className="text-gray-600">Preço: R${price}</p>
			<p className="text-gray-600">Descrição: {description}</p>

			<button
				onClick={() => handleAddToCart({ id, categoryId, name, price, description } as Product)}
				className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer mt-4"
			>
				Adicionar ao carrinho
			</button>
		</div>
	);
};

export { ProductCard };
