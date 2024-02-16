import { useForm } from "react-hook-form";
import { useCategoryStorage } from "../../storage/useCategoryStorage";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useProductStorage } from "@/storage/useProductStorage";

type FormValues = {
	name: string;
	price: number;
	description: string;
	categoryId: number;
};
const CreateProduct = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const { categories } = useCategoryStorage();
	const { addProduct, products } = useProductStorage();

	const onSubmit = ({ categoryId, name, price, description }: FormValues) => {
		const id = products.length + 1;

		addProduct({
			id,
			categoryId: Number(categoryId),
			name,
			price,
			description,
		});
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
					Cariar ovo produto
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold">Are you absolutely sure?</DialogTitle>
						<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("name")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="text"
								placeholder="Name"
							/>
							<input
								{...register("price")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="number"
								placeholder="Price"
							/>
							<input
								{...register("description")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="text"
								placeholder="Description"
							/>
							<select {...register("categoryId")} className="border border-gray-300 rounded px-4 py-2 mb-4 w-full">
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>

							<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
								Confirmar
							</button>
						</form>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export { CreateProduct };
