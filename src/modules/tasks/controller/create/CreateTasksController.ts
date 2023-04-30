import { ICreateTaskUseCase } from "../../usecase/create/ICreateTaskUseCase";
import { ICreateTaskController } from "./ICreateTasksController";

export class CreateTaskController implements ICreateTaskController {
	constructor(
		private readonly useCase: ICreateTaskUseCase
	) {}
	
	async handle(request: any): Promise<void> {
		const result = await this.useCase.execute(request)
	
		return result;
	}
}