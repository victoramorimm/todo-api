import { TaskModel } from "../../../../model/TaskModel";

interface ITaskRepository {
	create(task: TaskModel): Promise<void>
	list(data: ListTaskRepositoryDTO): Promise<TaskModel[]> 
}

type ListTaskRepositoryDTO = {
	skip: number;
	take: number
}

export { ITaskRepository, ListTaskRepositoryDTO }