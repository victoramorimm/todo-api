import { IListTasksUseCase } from "../../usecase/list/IListTasksUseCase";
import { IListTasksController, ListTasksDTO } from "./IListTasksController";
import { ListTasksControllerResponse } from "./response/ListTasksControllerResponse";

export class ListTasksController implements IListTasksController {
	constructor(
		private readonly useCase: IListTasksUseCase
	) {}
	
	async handle(request: ListTasksDTO): Promise<ListTasksControllerResponse> {
		const result = await this.useCase.execute(request)
	
		return result;
	}
}