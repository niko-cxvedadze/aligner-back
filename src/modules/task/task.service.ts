import { Task } from '@src/modules/task/task.entity';
import { TCreateTaskBody } from './dtos/create-task.dto';

export function createTaskService(data: TCreateTaskBody) {
  const task = new Task(data);
  return task.save();
}

export function getTasksService(workspaceId: string) {
  return Task.find({ workspaceId });
}
