import { TaskModel } from "../../../../model/TaskModel";

export interface ITaskRepository {
	create(task: TaskModel): Promise<void>
	list(): Promise<TaskModel[]> 
}