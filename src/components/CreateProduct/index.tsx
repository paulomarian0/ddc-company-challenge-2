import { useForm } from "react-hook-form";
import { useCategoryStorage } from "../../storage/useCategoryStorage";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useProductStorage } from "@/storage/useProductStorage";
import { DialogClose } from "@radix-ui/react-dialog";

type FormValues = {
	name: string;
	price: number;
	description: string;
	categoryId: number;
};

const CreateProduct = () => {
	const { register, handleSubmit, reset } = useForm<FormValues>();
	const { categories } = useCategoryStorage();
	const { addProduct, products } = useProductStorage();

	const onSubmit = ({ categoryId, name, price, description }: FormValues) => {
		const id = products.length + 1;
		const haveProductWithSameName = products.some((product) => product.name === name);

		if (haveProductWithSameName) {
			return;
		}

		addProduct({
			id: Number(id),
			categoryId: Number(categoryId),
			name,
			price: Number(price),
			description,
		});
		reset();
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
					Criar novo produto
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold">Preencha com os dados do novo produto</DialogTitle>
						<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="name" className="block mb-2">
								Nome
							</label>
							<input
								{...register("name")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="text"
							/>
							<label htmlFor="price" className="block mb-2">
								Preço
							</label>
							<input
								{...register("price")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="number"
							/>
							<label htmlFor="description" className="block mb-2">
								Descrição
							</label>
							<textarea {...register("description")} className="border border-gray-300 rounded px-4 py-2 mb-4 w-full" />
							<label htmlFor="category" className="block mb-2">
								Selecione a categoria
							</label>
							<select {...register("categoryId")} className="border border-gray-300 rounded px-4 py-2 mb-4 w-full">
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
							<DialogClose>
								<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
									Confirmar
								</button>
							</DialogClose>
						</form>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export { CreateProduct };
