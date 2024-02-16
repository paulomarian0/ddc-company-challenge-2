import { useState } from "react";
import { CartItem, Category, Product } from "./types";
import { TabsContainer } from "./components/TabsContainer";

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
	const [categories, setCategories] = useState<Category[]>([
		{ id: 1, name: "Eletrônicos" },
		{ id: 2, name: "Livros" },
		{ id: 3, name: "Casa" },
		// Adicione mais categorias conforme necessário
	]);

	const [products, setProducts] = useState<Product[]>([
		{
			id: 1,
			categoryId: 1,
			name: "Notebook",
			price: 3000,
			description: "Notebook XYZ, tela 15 polegadas",
		},
		{
			id: 2,
			categoryId: 2,
			name: "Livro de TypeScript",
			price: 120,
			description: "Aprenda TypeScript do básico ao avançado",
		},
		{
			id: 3,
			categoryId: 3,
			name: "Cadeira Gamer",
			price: 1500,
			description: "Cadeira gamer confortável",
		},
		// Adicione mais produtos conforme necessário
	]);

	const [carrinhoDeProdutos, setCarrinhoDeProdutos] = useState<CartItem[]>([]);

	// Renderização e lógica adicionais aqui

	return (
		<div>
			<TabsContainer categories={categories} products={products} />
		</div>
	);
}

export default App;
