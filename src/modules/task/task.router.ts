import express from 'express';
import TaskController from './task.controller';
import { validateBody } from '@src/middlewares/validateBody.middleware';

import { UpdateTaskBodyDto } from './dtos/update-task.dto';
import { CreateTaskBodyDto } from './dtos/create-task.dto';

export const TaskRouter = express.Router();

TaskRouter.get('/:workspaceId', TaskController.getTasks);
TaskRouter.get('/one/:taskId', TaskController.getTaskById);

TaskRouter.post(
  '/',
  validateBody(CreateTaskBodyDto),
  TaskController.createTask,
);

TaskRouter.put(
  '/:taskId',
  validateBody(UpdateTaskBodyDto),
  TaskController.updateTask,
);

TaskRouter.delete('/:taskId', TaskController.deleteTask);
