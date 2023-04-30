import { NotificationService } from "../utils/service/notification/inMemory/NotificationService";
import { AfterTaskCreatedEventSubscriber } from "./AfterTaskCreatedSubscriber";

const notificationService = new NotificationService()
new AfterTaskCreatedEventSubscriber(notificationService)