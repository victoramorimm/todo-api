import { IListTasksUseCase } from "../IListTasksUseCase";
import { ListTasksUseCase } from "../ListTasksUseCase";

export const makeListTasksUseCase = (): IListTasksUseCase => {
	return new ListTasksUseCase()
}