import { Router } from 'express';
import { CreateWorkspaceDto } from './dtos/create-workspace.dto';
import { validateBody } from '@src/middlewares/validateBody.middleware';

import WorkspaceController from './workspace.controller';

export const WorkspaceRouter = Router();

WorkspaceRouter.post(
  '/',
  validateBody(CreateWorkspaceDto),
  WorkspaceController.createWorkspace,
);

WorkspaceRouter.get('/', WorkspaceController.getWorkspaces);
