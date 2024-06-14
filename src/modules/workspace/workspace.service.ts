import { Workspace } from '@src/modules/workspace/workspace.entity';
import { IWorkspace } from '@src/modules/workspace/workspace.entity';
import { Schema } from 'mongoose';
import * as console from 'console';

export function createWorkspaceService(body: IWorkspace) {
  const workspace = new Workspace({ name: body.name, ownerId: body.ownerId });
  return workspace.save();
}

export function getWorkspaceService(owner: string) {
  return Workspace.find({ owner: owner });
}

export async function getWorkspaceByIdService(
  id: Schema.Types.ObjectId,
  ownerId: string,
) {
  const workspace = await Workspace.findOne({ _id: id, ownerId: ownerId });

  if (!workspace) {
    throw new Error('Workspace not found');
  }

  return workspace;
}
