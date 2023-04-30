import { TaskRepositoryInMemory } from "../../../infra/repository/inMemory/TaskRepositoryInMemory"
import { CreateTaskUseCase } from "../CreateTaskUseCase"
import { ICreateTaskUseCase } from "../ICreateTaskUseCase"

export const makeCreateTaskUseCase = (): ICreateTaskUseCase => {
	const taskRepository = new TaskRepositoryInMemory()

	return new CreateTaskUseCase(taskRepository)
}