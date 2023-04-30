import { makeListTasksUseCase } from "../../../usecase/list/factory/ListTasksUseCaseFactory"
import { IListTasksController } from "../IListTasksController"
import { ListTasksController } from "../ListTasksController"

export const makeListTasksController = (): IListTasksController => {
	const useCase = makeListTasksUseCase()
	return new ListTasksController(useCase)
}