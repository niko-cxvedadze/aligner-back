import { Task } from '@src/modules/task/task.entity';
import { TUpdateTaskBody } from './dtos/update-task.dto';
import { TCreateTaskBody } from './dtos/create-task.dto';

export function createTaskService(data: TCreateTaskBody) {
  const task = new Task(data);
  return task.save();
}

export function getTasksService(workspaceId: string) {
  return Task.find({ workspaceId });
}

export async function getTaskByIdService(taskId: string) {
  const task = await Task.findById(taskId);

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
}

export async function deleteTaskService(taskId: string) {
  const deletedTask = await Task.findByIdAndDelete(taskId);
  if (!deletedTask) {
    throw new Error('Task not found');
  }
  return deletedTask;
}

export async function updateTaskService(taskId: string, data: TUpdateTaskBody) {
  const updatedTask = await Task.findByIdAndUpdate(
    taskId,
    { $set: data },
    { new: true },
  );

  if (!updatedTask) {
    throw new Error('Task not found');
  }

  return updatedTask;
}
