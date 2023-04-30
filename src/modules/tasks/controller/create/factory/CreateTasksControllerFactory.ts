import { makeCreateTaskUseCase } from "../../../usecase/create/factory/CreateTaskUseCaseFactory"
import { CreateTaskController } from "../CreateTasksController"
import { ICreateTaskController } from "../ICreateTasksController"

export const makeCreateTaskController = (): ICreateTaskController => {
	const useCase = makeCreateTaskUseCase()
	return new CreateTaskController(useCase)
}