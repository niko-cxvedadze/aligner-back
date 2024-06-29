import { Router } from 'express';
import { CreateWorkspaceBodyDto } from './dtos/create-workspace.dto';
import { UpdateWorkspaceBodyDto } from './dtos/update-workspace.dto';
import { validateBody } from '@src/middlewares/validateBody.middleware';

import WorkspaceController from './workspace.controller';

export const WorkspaceRouter = Router();

WorkspaceRouter.post(
  '/',
  validateBody(CreateWorkspaceBodyDto),
  WorkspaceController.createWorkspace,
);

WorkspaceRouter.get('/', WorkspaceController.getWorkspaces);

WorkspaceRouter.delete('/:id', WorkspaceController.deleteWorkspace);

WorkspaceRouter.put(
  '/:id',
  validateBody(UpdateWorkspaceBodyDto),
  WorkspaceController.updateWorkspace,
);
