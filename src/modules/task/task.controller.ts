import { Response, Request } from 'express';
import {
  getTasksService,
  createTaskService,
} from '@src/modules/task/task.service';

class TaskController {
  async createTask(req: Request, res: Response) {
    try {
      const task = await createTaskService({
        name: req.body.name,
        status: req.body.status,
        description: req.body.description,
        priority: req.body.priority,
        workspaceId: req.body.workspaceId,
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await getTasksService(req.params.workspaceId);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new TaskController();
