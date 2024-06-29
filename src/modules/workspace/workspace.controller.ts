import { Request, Response } from 'express';
import {
  deleteWorkspaceService,
  getWorkspaceService,
  createWorkspaceService,
  updateWorkspaceService,
} from '@src/modules/workspace/workspace.service';

class WorkspaceController {
  async createWorkspace(req: Request, res: Response) {
    try {
      const workspace = await createWorkspaceService({
        ownerId: req.userId!,
        body: { name: req.body.name, color: req.body.color },
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

  async deleteWorkspace(req: Request, res: Response) {
    try {
      const deletedWorkspace = await deleteWorkspaceService({
        workspaceId: req.params.id as string,
        ownerId: req.userId!,
      });

      res.status(200).json(deletedWorkspace);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateWorkspace(req: Request, res: Response) {
    try {
      const updatedWorkspace = await updateWorkspaceService({
        ownerId: req.userId!,
        workspaceId: req.params.id as string,
        updateData: req.body,
      });
      res.status(200).json(updatedWorkspace);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new WorkspaceController();
