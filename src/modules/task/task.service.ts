import { Task } from '@src/modules/task/task.entity';
import { ITask } from '@src/modules/task/task.entity';

export function createTaskService(data: ITask) {
  const task = new Task(data);
  return task.save();
}
