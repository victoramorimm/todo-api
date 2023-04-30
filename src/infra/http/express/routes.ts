import { Router } from "express";
import tasksRouter from "../../../modules/tasks/infra/http/task.routes";

const router = Router()

router.use('/tasks', tasksRouter)

export default router