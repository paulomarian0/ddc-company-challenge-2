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
		const id = categories.length + 1;
		addCategory({
			id,
			name,
		});
	};

	console.log(categories);

	return (
		<div>
			<Dialog>
				<DialogTrigger className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
					Criar nova categoria
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold">Digite o nome da nova categoria</DialogTitle>
						<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("name")}
								className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
								type="text"
								placeholder="Name"
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
