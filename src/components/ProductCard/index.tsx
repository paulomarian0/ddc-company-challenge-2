import { useCartStorage } from "@/storage/useCartStorage";
import { useProductStorage } from "@/storage/useProductStorage";
import { Product } from "@/types";
import { toast } from "sonner";

interface IProductCardProps {
	id: number;
	categoryId: number;
	name: string;
	price: number;
	description: string;
}

const ProductCard = ({ id, categoryId, name, price, description }: IProductCardProps) => {
	const { cartList, addToCart, addQuantity } = useCartStorage();
	const { removeProduct } = useProductStorage();

	const handleAddToCart = (data: Product) => {
		if (cartList.some((item) => item.name === data.name)) {
			addQuantity(data.id);

			return toast.success("Produto já existente adicionado no carrinho, quantidade atualizada");
		}

		addToCart({
			...data,
			quantity: 1,
			total: data.price,
		});

		return toast.success("Novo produto adicionado ao carrinho");
	};

	const handleDeleteProduct = (id: number) => {
		removeProduct(id);

		toast.success("Produto removido com sucesso");
	};

	return (
		<div className="bg-gray-200 p-4 rounded my-6 w-full">
			<h3 className="text-xl font-bold mb-2">{name}</h3>
			<p className="text-gray-600 mb-2">
				Preço: {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
			</p>
			<p className="text-gray-600 mb-4">Descrição: {description}</p>

			<div className="flex justify-between">
				<button
					onClick={() => handleAddToCart({ id, categoryId, name, price, description } as Product)}
					className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
				>
					Adicionar ao carrinho
				</button>
				<button
					onClick={() => handleDeleteProduct(id)}
					className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
				>
					Excluir
				</button>
			</div>
		</div>
	);
};

export { ProductCard };
