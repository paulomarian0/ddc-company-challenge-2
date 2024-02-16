import { useState } from "react";
import { CartItem, Category, Product } from "./types";
import { TabsContainer } from "./components/TabsContainer";
import { useCategoryStorage } from "./storage/useCategoryStorage";
import { useProductStorage } from "./storage/useProductStorage";
import { Cart } from "./components/Cart";
import { CreateProduct } from "./components/CreateProduct";
import { CreateCategory } from "./components/CreateCategory";

// ```Desenvolver uma aplicação de e-commerce simplificada utilizando React,
// onde o componente principal gerencia o estado de produtos,
// categorias e um carrinho de compras. Este componente pai irá renderizar um
// componente filho TabsContainer, que exibirá tabs para cada categoria de produto disponível.
// Cada tab, quando selecionada, renderiza componentes netos ProdutoCard que exibem os produtos
// pertencentes à categoria selecionada. Cada ProdutoCard inclui um botão que permite adicionar o produto
// ao estado do carrinho de compras no componente pai.
// ```
// arquivo types.ts ```export type Categoria = {
//   id: number;
//   nome: string;
// };

// export type Produto = {
//   id: number;
//   idCategoria: number;
//   nome: string;
//   preco: number;
//   descricao: string;
// };

// export type ItemCarrinho = {
//   idProduto: number;ZZ
//   quantidade: number;
// };

// export type Estado = {
//   produtos: Produto[];
//   categorias: Categoria[];
//   carrinhoDeProdutos: ItemCarrinho[];
// };
// ```
// arquivo page.tsx ```import React, { useState } from 'react';

// const ComponentePai: React.FC = () => {
//   // Estados mockados
//   const [categorias, setCategorias] = useState<Categoria[]>([
//     { id: 1, nome: 'Eletrônicos' },
//     { id: 2, nome: 'Livros' },
//     { id: 3, nome: 'Casa' },
//     // Adicione mais categorias conforme necessário
//   ]);

//   const [produtos, setProdutos] = useState<Produto[]>([
//     { id: 1, idCategoria: 1, nome: 'Notebook', preco: 3000, descricao: 'Notebook XYZ, tela 15 polegadas' },
//     { id: 2, idCategoria: 2, nome: 'Livro de TypeScript', preco: 120, descricao: 'Aprenda TypeScript do básico ao avançado' },
//     { id: 3, idCategoria: 3, nome: 'Cadeira Gamer', preco: 1500, descricao: 'Cadeira gamer confortável' },
//     // Adicione mais produtos conforme necessário
//   ]);

//   const [carrinhoDeProdutos, setCarrinhoDeProdutos] = useState<ItemCarrinho[]>([]);

//   // Renderização e lógica adicionais aqui

//   return (
//     <div>
//       {/* Renderize o TabsContainer aqui, passando as categorias e produtos como props */}
//     </div>
//   );
// };

// export default ComponentePai;
// ```

// terceiro arquivo: TabsContainer.tsx
// quarto arquivo: ProdutoCard.tsx

// ```Cada componente deve ficar separado em seu próprio arquivo.```

function App() {
	const { categories } = useCategoryStorage();
	const { products } = useProductStorage();

	return (
		<div className="container mx-auto px-4">
			<div className="flex justify-between items-center p-4">
				<CreateProduct />
				<CreateCategory />
				<Cart />
			</div>
			<TabsContainer categories={categories} products={products} />
		</div>
	);
}

export default App;
