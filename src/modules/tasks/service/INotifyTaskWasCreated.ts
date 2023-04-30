import { TaskModel } from "../../model/TaskModel";

export interface NotifyTaskWasCreated {
	notifyTaskWasCreated(task: TaskModel, emailToNotify: string): Promise<void>
}