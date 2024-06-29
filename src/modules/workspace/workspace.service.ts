import { Schema } from 'mongoose';
import { Workspace } from '@src/modules/workspace/workspace.entity';
import { TCreateWorkspaceBody } from './dtos/create-workspace.dto';
import { TUpdateWorkspaceBodyDto } from './dtos/update-workspace.dto';

export function createWorkspaceService({
  body,
  ownerId,
  default: defaultWorkspace = false,
}: {
  ownerId: string;
  default?: boolean;
  body: TCreateWorkspaceBody;
}) {
  const workspace = new Workspace({
    name: body.name,
    ownerId: ownerId,
    color: body?.color,
    default: defaultWorkspace,
  });
  return workspace.save();
}

export async function getWorkspaceService(ownerId: string) {
  const workspaces = await Workspace.find({ ownerId });

  if (workspaces.length === 0) {
    const workspace = await createWorkspaceService({
      body: { name: 'General' },
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

export async function updateWorkspaceService({
  ownerId,
  updateData,
  workspaceId,
}: {
  ownerId: string;
  workspaceId: string;
  updateData: TUpdateWorkspaceBodyDto;
}) {
  const workspace = await getWorkspaceByIdService({ workspaceId, ownerId });

  const updatedWorkspace = await Workspace.findByIdAndUpdate(
    workspace._id,
    { $set: updateData },
    { new: true },
  );

  return updatedWorkspace;
}
