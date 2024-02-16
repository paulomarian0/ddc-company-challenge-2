import { useForm } from "react-hook-form";
import { useCategoryStorage } from "../../storage/useCategoryStorage";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type FormValues = {
	name: string;
};

const CreateCategory = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const { addCategory, categories } = useCategoryStorage();

	const onSubmit = ({ name }: FormValues) => {
		const haveCategoryWithSameName = categories.some((category) => category.name === name);
		if (haveCategoryWithSameName) {
			return;
		}

		const id = categories.length + 1;
		addCategory({
			id: Number(id),
			name,
		});
	};

	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
					Criar nova categoria
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold">Preencha com o nome da nova categoria</DialogTitle>
						<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="name" className="block mb-2">
								Nome
							</label>
							<input
								{...register("name")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="text"
							/>
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

export { CreateCategory };
