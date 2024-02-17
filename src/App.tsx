import { TabsContainer } from "./components/TabsContainer";
import { useCategoryStorage } from "./storage/useCategoryStorage";
import { useProductStorage } from "./storage/useProductStorage";
import { Cart } from "./components/Cart";
import { CreateProduct } from "./components/CreateProduct";
import { CreateCategory } from "./components/CreateCategory";

function App() {
	const { categories } = useCategoryStorage();
	const { products } = useProductStorage();

	return (
		<div className="container mx-auto px-4">
			<div className="flex  justify-between gap-4 p-4">
				<div className="flex gap-4">
					<CreateProduct />
					<CreateCategory />
				</div>
				<Cart />
			</div>
			<TabsContainer categories={categories} products={products} />
		</div>
	);
}

export default App;
