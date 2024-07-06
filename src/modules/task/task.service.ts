import { Task } from '@src/modules/task/task.entity';
import { TUpdateTaskBody } from './dtos/update-task.dto';
import { TCreateTaskBody } from './dtos/create-task.dto';
import { TGetTasksQuery } from './dtos/get-tasks.dto';

export function createTaskService(data: TCreateTaskBody) {
  const task = new Task(data);
  return task.save();
}

export async function getTasksService(
  workspaceId: string,
  query: TGetTasksQuery,
) {
  const queryBuilder = Task.find({ workspaceId });
  const countQueryBuilder = Task.find({ workspaceId });

  if (query.limit) {
    queryBuilder.limit(query.limit);
  }
  if (query.skip) {
    queryBuilder.skip(query.skip);
  }

  if (query.status) {
    queryBuilder.where('status').equals(query.status);
    countQueryBuilder.where('status').equals(query.status);
  }

  if (query.priority) {
    queryBuilder.where('priority').equals(query.priority);
    countQueryBuilder.where('priority').equals(query.priority);
  }

  const tasks = await queryBuilder.exec();
  const total = await countQueryBuilder.countDocuments();

  return { tasks, total };
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
