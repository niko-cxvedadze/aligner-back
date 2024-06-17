import { Schema } from 'mongoose';
import { Workspace } from '@src/modules/workspace/workspace.entity';
import { IWorkspace } from '@src/modules/workspace/workspace.entity';

export function createWorkspaceService(body: IWorkspace) {
  const workspace = new Workspace({ name: body.name, ownerId: body.ownerId });
  return workspace.save();
}

export function getWorkspaceService(ownerId: string) {
  return Workspace.find({ ownerId });
}

export async function getWorkspaceByIdService(props: {
  workspaceId: string | Schema.Types.ObjectId;
  ownerId: string;
}) {
  const workspace = await Workspace.findOne({
    _id: props.workspaceId,
    ownerId: props.ownerId,
  });

  if (!workspace) {
    throw new Error('Workspace not found');
  }

  return workspace;
}

export async function deleteWorkspaceService(props: {
  workspaceId: string;
  ownerId: string;
}) {
  const workspace = await getWorkspaceByIdService(props);
  await workspace.deleteOne();
  return workspace;
}

export async function updateWorkspaceService(props: {
  ownerId: string;
  workspaceId: string;
  updateData: any;
}) {
  const updatedWorkspace = await Workspace.findByIdAndUpdate(
    props.workspaceId,
    { $set: props.updateData },
    { new: true },
  );

  return updatedWorkspace;
}
