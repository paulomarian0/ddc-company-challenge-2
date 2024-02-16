interface IProductCardProps {
	name: string;
	price: number;
	description: string;
}

const ProductCard = ({ name, price, description }: IProductCardProps) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>Preço: R${price}</p>
			<p>Descrição: {description}</p>
		</div>
	);
};

export { ProductCard };
