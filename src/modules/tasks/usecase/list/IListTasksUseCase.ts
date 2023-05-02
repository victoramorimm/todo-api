import { TaskModel } from "../../../model/TaskModel";
import { ListTasksDTO } from "../../controller/list/IListTasksController";

interface IListTasksUseCase {
	execute(request: ListTasksDTO): Promise<ListTasksUseCaseResult>
}

type ListTasksUseCaseResult = {
	todoItem: TaskModel[]
}

export { IListTasksUseCase, ListTasksUseCaseResult }