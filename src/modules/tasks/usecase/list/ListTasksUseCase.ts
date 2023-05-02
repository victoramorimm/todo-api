import { ListTasksDTO } from "../../controller/list/IListTasksController";
import { ITaskRepository } from "../../infra/repository/protocol/ITaskRepository";
import { IListTasksUseCase, ListTasksUseCaseResult } from "./IListTasksUseCase";

export class ListTasksUseCase implements IListTasksUseCase {
	constructor(private readonly taskRepository: ITaskRepository) {}

	async execute(request: ListTasksDTO): Promise<ListTasksUseCaseResult> {
		const tasks = await this.taskRepository.list(request)

		return {
			todoItem: tasks
		}
	}
}