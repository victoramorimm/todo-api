import { IListTasksUseCase, ListTasksUseCaseResult } from "./IListTasksUseCase";

export class ListTasksUseCase implements IListTasksUseCase {
	async execute(request: void): Promise<ListTasksUseCaseResult> {
		const objeto = {
			id: 1,
			done: false,
			task: 'Tarefa 01'
		};

		const array = Array.from({ length: 50 }, () => Object.assign({}, objeto));

		return {
			todoItem: array
		}
	}
}