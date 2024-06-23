import express from 'express';
import TaskController from './task.controller';
import { validateBody } from '@src/middlewares/validateBody.middleware';
import { CreateTaskDto } from '@src/modules/task/dtos/create-task.dto';

export const TaskRouter = express.Router();

TaskRouter.get('/:workspaceId', TaskController.getTasks);
TaskRouter.post('/', validateBody(CreateTaskDto), TaskController.createTask);
