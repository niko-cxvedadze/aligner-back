import { Response, Request } from 'express';
import { createTaskService } from '@src/modules/task/task.service';

class TaskController {
  async createTask(req: Request, res: Response) {
    try {
      const task = await createTaskService({
        name: req.body.name,
        status: req.body.status,
        description: req.body.description,
        ownerId: req.userId!,
        workspaceId: req.body.workspaceId,
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new TaskController();
