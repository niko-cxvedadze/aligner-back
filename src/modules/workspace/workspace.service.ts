import { Schema } from 'mongoose';
import { Workspace } from '@src/modules/workspace/workspace.entity';
import { IWorkspace } from '@src/modules/workspace/workspace.entity';

export function createWorkspaceService(body: IWorkspace) {
  const workspace = new Workspace({
    name: body.name,
    ownerId: body.ownerId,
    default: Boolean(body.default),
    color: body?.color,
  });
  return workspace.save();
}

export async function getWorkspaceService(ownerId: string) {
  const workspaces = await Workspace.find({ ownerId });

  if (workspaces.length === 0) {
    const workspace = await createWorkspaceService({
      name: 'General',
      ownerId,
      default: true,
    });

    return [workspace];
  }

  return workspaces;
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

  if (workspace.default === true) {
    throw new Error('Cannot delete default workspace');
  }

  await Workspace.findOneAndDelete({ _id: props.workspaceId });
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
