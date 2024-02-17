import { useForm } from "react-hook-form";
import { useCategoryStorage } from "../../storage/useCategoryStorage";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

type FormValues = {
	name: string;
};

const CreateCategory = () => {
	const { register, handleSubmit, reset } = useForm<FormValues>();
	const { addCategory, categories } = useCategoryStorage();

	const onSubmit = ({ name }: FormValues) => {
		if (!name) return;

		const haveCategoryWithSameName = categories.some((category) => category.name === name);
		if (haveCategoryWithSameName) {
			return toast.error("Já existe uma categoria com esse nome");
		}

		const id = categories.length + 1;
		addCategory({
			id: Number(id),
			name,
		});

		toast.success("Nova categoria criada com sucesso");
		reset();
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

export { CreateCategory };
