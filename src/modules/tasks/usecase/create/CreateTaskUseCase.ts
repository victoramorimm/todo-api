import { EventNameEnum, Publisher } from "../../../../core/Publisher";
import { TaskModel } from "../../../model/TaskModel";
import { ITaskRepository } from "../../infra/repository/protocol/ITaskRepository";
import { CreateTaskRequestDTO, ICreateTaskUseCase } from "./ICreateTaskUseCase";

class CreateTaskUseCase implements ICreateTaskUseCase {
	constructor(private readonly taskRepository: ITaskRepository) {}

	async execute(request: CreateTaskRequestDTO): Promise<void> {
		const taskModel: TaskModel = {
			...request
		}
		
		await this.taskRepository.create(taskModel)
		
		Publisher.publishMessage(EventNameEnum.TASK_CREATION, taskModel)
	}
}

export { CreateTaskUseCase }