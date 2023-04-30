import { IListTasksUseCase } from "../../usecase/list/IListTasksUseCase";
import { IListTasksController } from "./IListTasksController";
import { ListTasksControllerResponse } from "./response/ListTasksControllerResponse";

export class ListTasksController implements IListTasksController {
	constructor(
		private readonly useCase: IListTasksUseCase
	) {}
	
	async handle(request: any): Promise<ListTasksControllerResponse> {
		const result = await this.useCase.execute()
	
		return result;
	}
}