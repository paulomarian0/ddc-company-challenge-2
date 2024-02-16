import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { Category, Product } from "../../types";

interface ITabContainerProps {
	categories: Category[];
	products: Product[];
}

const TabsContainer = ({ categories, products }: ITabContainerProps) => {
	const [selectedTab, setSelectedTab] = useState(1);
	const [productsToShow, setProductsToShow] = useState(products.filter((product: Product) => product.categoryId === 1));

	const handleChangeTab = (id: number) => {
		setSelectedTab(id);
		setProductsToShow(products.filter((product) => product.categoryId === id));
	};

	return (
		<div>
			<button>Adicionar novo produto</button>
			<button>Adicionar nova categoria</button>
			<ul className="flex justify-between text-5xl">
				{categories.map((category) => (
					<li
						key={category.id}
						className={category.id === selectedTab ? "text-blue-500" : "text-gray-500"}
						onClick={() => handleChangeTab(category.id)}
					>
						{category.name}
					</li>
				))}
			</ul>

			{productsToShow.map((product) => (
				<ProductCard key={product.id} name={product.name} price={product.price} description={product.description} />
			))}
		</div>
	);
};

export { TabsContainer };
