import express from 'express';
import TaskController from './task.controller';
import { validateBody } from '@src/middlewares/validateBody.middleware';
import { CreateTaskBodyDto } from '@src/modules/task/dtos/create-task.dto';

export const TaskRouter = express.Router();

TaskRouter.get('/:workspaceId', TaskController.getTasks);
TaskRouter.post(
  '/',
  validateBody(CreateTaskBodyDto),
  TaskController.createTask,
);
