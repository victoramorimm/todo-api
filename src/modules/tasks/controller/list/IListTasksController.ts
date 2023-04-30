import { ListTasksControllerResponse } from "./response/ListTasksControllerResponse";

interface IListTasksController {
	handle(request: void): Promise<ListTasksControllerResponse>
}

export { IListTasksController }