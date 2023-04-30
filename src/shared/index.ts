import { NotificationService } from "../utils/service/notification/inMemory/NotificationService";
import { AfterTaskCreatedEventSubscriber } from "../modules/tasks/subscriber/AfterTaskCreatedSubscriber";

const notificationService = new NotificationService()
new AfterTaskCreatedEventSubscriber(notificationService)