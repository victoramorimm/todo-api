import { makeCreateTaskUseCase } from "../../usecase/create/factory/CreateTaskUseCaseFactory"
import { CreateTaskController } from "../create/CreateTasksController"
import { ICreateTaskController } from "../create/ICreateTasksController"

export const makeCreateTaskController = (): ICreateTaskController => {
	const useCase = makeCreateTaskUseCase()
	return new CreateTaskController(useCase)
}