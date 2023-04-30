import { TaskModel } from "../../model/TaskModel";
import { NotifyTaskWasCreated } from "../service/INotifyTaskWasCreated";
import eventsEmitter from "../../../shared/EventEmitter";

export class AfterTaskCreatedEventSubscriber {
  constructor(private readonly notification: NotifyTaskWasCreated){
		this.setupSubscriptions()
  }

	setupSubscriptions() {
		eventsEmitter.on('TASK_CREATION', async (data) => {
			const { request: task } = data

			this.onTaskCreatedEvent(task)
		});
	}

	private async onTaskCreatedEvent(task: TaskModel): Promise<void> {
		await this.notification.notifyTaskWasCreated(task, 'any_email@mail.com')
	}
}