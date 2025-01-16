
import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/task.contoller.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { taskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTaskById);
router.post("/tasks", validateSchema(taskSchema), authRequired, createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);


export default router;