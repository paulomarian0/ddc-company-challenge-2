import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { Category, Product } from "../../types";

interface ITabContainerProps {
	categories: Category[];
	products: Product[];
}

const TabsContainer = ({ categories, products }: ITabContainerProps) => {
	const [selectedTab, setSelectedTab] = useState(1);
	const [productsToShow, setProductsToShow] = useState(products.filter((product: Product) => product.categoryId === 1));

	const handleChangeTab = useCallback(
		(id: number) => {
			setSelectedTab(id);
			setProductsToShow(products.filter((product) => product.categoryId === id));
		},
		[products],
	);

	useEffect(() => {
		setProductsToShow(products.filter((product) => product.categoryId === selectedTab));
	}, [selectedTab, products]);

	return (
		<div>
			<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
				<ul className="flex flex-wrap -mb-px">
					{categories.map((category) => (
						<li
							key={category.id}
							className={`cursor-pointer ${
								category.id === selectedTab ? "text-blue-500 font-bold border-b-2 border-gray-300" : "text-gray-500"
							}`}
							onClick={() => handleChangeTab(category.id)}
						>
							<p className="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600">
								{category.name}
							</p>
						</li>
					))}
				</ul>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
				{productsToShow.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						categoryId={product.categoryId}
						name={product.name}
						price={product.price}
						description={product.description}
					/>
				))}
			</div>
		</div>
	);
};

export { TabsContainer };
