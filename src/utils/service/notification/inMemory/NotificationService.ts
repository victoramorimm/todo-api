import { TaskModel } from "../../../../modules/model/TaskModel";
import { NotifyTaskWasCreated } from "../../../../modules/tasks/service/INotifyTaskWasCreated";

class NotificationService implements NotifyTaskWasCreated {
	notifyTaskWasCreated(task: TaskModel, emailToNotify: string): Promise<void> {
		const now = new Date()
		console.log(`A tarefa ${task.task} foi criada às ${now}`)
		return Promise.resolve()
	}
}

export { NotificationService }