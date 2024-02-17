import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useCartStorage } from "@/storage/useCartStorage";
import { CartCard } from "../CartCard";

const Cart = () => {
	const { cartList, clearCart } = useCartStorage();

	return (
		<div>
			<Drawer>
				<DrawerTrigger>
					<button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Ver carrinho</button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle className="text-xl font-bold">Carrinho</DrawerTitle>
					</DrawerHeader>

					<div className="max-h-96 overflow-auto">
						{cartList.length === 0 && <p className="text-center text-2xl">Seu carrinho está vazio!</p>}
						{cartList.map((item) => (
							<div className="px-4">
								<CartCard
									id={item.id}
									key={item.id}
									name={item.name}
									price={item.price}
									description={item.description}
									quantity={item.quantity}
									total={item.total}
								/>
							</div>
						))}
					</div>
					<DrawerFooter>
						<button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={clearCart}>
							Remover tudo
						</button>
					</DrawerFooter>
				</DrawerContent>
				<DrawerClose />
			</Drawer>
		</div>
	);
};

export { Cart };
