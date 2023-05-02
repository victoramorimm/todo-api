import prismaClient from "../../../../../../infra/prisma/prismaClient";
import { TaskModel } from "../../../../../model/TaskModel";
import { ITaskRepository, ListTaskRepositoryDTO } from "../../protocol/ITaskRepository";

export class PrismaTaskRepository implements ITaskRepository {
	create(task: TaskModel): Promise<void> {
		throw new Error("Method not implemented.");
	}

	async list(data: ListTaskRepositoryDTO): Promise<TaskModel[]> {
		const allTasks = await prismaClient.task.findMany({
			skip: data.skip,
			take: data.take
		})
	
		return allTasks;
	}
}