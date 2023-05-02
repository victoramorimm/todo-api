import { PrismaTaskRepository } from "../../../infra/repository/implementation/prisma/PrismaTaskRepository";
import { IListTasksUseCase } from "../IListTasksUseCase";
import { ListTasksUseCase } from "../ListTasksUseCase";

export const makeListTasksUseCase = (): IListTasksUseCase => {
	const taskRepository = new PrismaTaskRepository()
	return new ListTasksUseCase(taskRepository)
}