import { ListTasksControllerResponse } from "./response/ListTasksControllerResponse";

interface IListTasksController {
	handle(request: ListTasksDTO): Promise<ListTasksControllerResponse>
}

type ListTasksDTO = {
	skip: number;
	take: number;
}

export { IListTasksController, ListTasksDTO }