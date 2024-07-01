import express from 'express';
import TaskController from './task.controller';
import {
  validateQS,
  validateBody,
} from '@src/middlewares/validateBody.middleware';

import { UpdateTaskBodyDto } from './dtos/update-task.dto';
import { CreateTaskBodyDto } from './dtos/create-task.dto';
import { GetTasksQueryDto } from '@src/modules/task/dtos/get-tasks.dto';

export const TaskRouter = express.Router();

TaskRouter.get(
  '/:workspaceId',
  validateQS(GetTasksQueryDto),
  TaskController.getTasks,
);
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
