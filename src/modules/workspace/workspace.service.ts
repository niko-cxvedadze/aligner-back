import { Workspace } from '@src/modules/workspace/workspace.entity';
import { IWorkspace } from '@src/modules/workspace/workspace.entity';

export function createWorkspaceService(body: IWorkspace) {
  const workspace = new Workspace({ name: body.name, owner: body.owner });
  return workspace.save();
}

export function getWorkspaceService(owner: string) {
  return Workspace.find({ owner: owner });
}
