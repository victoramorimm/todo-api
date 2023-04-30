import { TaskModel } from "../../model/TaskModel";

export class TaskCreatedEvent {
	public dateTimeOccurred: Date;
	public task: TaskModel;

	constructor(task: TaskModel) {
		this.task = task;
		this.dateTimeOccurred = new Date()
	}

	getModelId(): number | undefined {
		return this.task.id;
	}
}