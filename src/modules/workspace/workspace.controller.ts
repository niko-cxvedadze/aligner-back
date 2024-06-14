import { Request, Response } from 'express';
import {
  getWorkspaceService,
  createWorkspaceService,
} from '@src/modules/workspace/workspace.service';

class WorkspaceController {
  async createWorkspace(req: Request, res: Response) {
    try {
      const workspace = await createWorkspaceService({
        name: req.body.name,
        ownerId: req.userId!,
        tasks: [],
      });
      res.status(201).json(workspace);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getWorkspaces(req: Request, res: Response) {
    try {
      const workspaces = await getWorkspaceService(req.userId!);
      res.status(200).json(workspaces);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new WorkspaceController();
