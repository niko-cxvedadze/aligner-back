import { Schema, model } from 'mongoose';
import { Workspace } from '@src/modules/workspace/workspace.entity';

export interface ITask {
  name: string;
  status: string;
  priority: string;
  description?: string;
  workspaceId: Schema.Types.ObjectId;
}

const TaskSchema = new Schema<ITask>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false, default: null },
    status: { type: String, required: true, default: 'todo' },
    priority: { type: String, required: true, default: 'no-priority' },
    workspaceId: { type: Schema.Types.ObjectId, ref: 'workspace' },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

TaskSchema.pre('save', async function (next) {
  const workspace = await Workspace.findById(this.workspaceId);
  if (!workspace) {
    throw new Error('Workspace not found');
  }
  next();
});

export const Task = model('task', TaskSchema);
