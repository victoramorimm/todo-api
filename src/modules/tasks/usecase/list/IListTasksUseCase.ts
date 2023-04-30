import { TaskModel } from "../../../model/TaskModel";

interface IListTasksUseCase {
	execute(request: void): Promise<ListTasksUseCaseResult>
}

type ListTasksUseCaseResult = {
	todoItem: TaskModel[]
}

export { IListTasksUseCase, ListTasksUseCaseResult }