import { Schema, model } from 'mongoose';
import { getWorkspaceByIdService } from '@src/modules/workspace/workspace.service';

export interface ITask {
  name: string;
  status: string;
  description: string;
  ownerId: string;
  workspaceId: Schema.Types.ObjectId;
}

const TaskSchema = new Schema<ITask>(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    ownerId: { type: String, required: true },
    workspaceId: { type: Schema.Types.ObjectId, ref: 'workspace' },
  },
  {
    versionKey: false,
  },
);

TaskSchema.pre('save', async function (next) {
  await getWorkspaceByIdService(this.workspaceId, this.ownerId);
  next();
});

export const Task = model('task', TaskSchema);
