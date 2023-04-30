import { TaskModel } from "../../../../model/TaskModel";
import { ITaskRepository } from "../protocol/ITaskRepository";

class TaskRepositoryInMemory implements ITaskRepository {
	create(task: TaskModel): Promise<void> {
		return Promise.resolve()
	}
	list(): Promise<TaskModel[]> {
		return Promise.resolve([
			{
				id: 1,
				done: true,
				task: 'task_name'
			}
		])
	}
}

export { TaskRepositoryInMemory }