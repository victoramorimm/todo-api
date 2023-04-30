import { Router } from "express";
import { makeListTasksController } from "../../controller/list/factory/ListTasksControllerFactory";
import { adaptRoute } from "../../../../main/adapters/express/expressRouteAdapter";

const tasksRouter = Router()

tasksRouter.get('/list-all', adaptRoute(makeListTasksController()))

export default tasksRouter;