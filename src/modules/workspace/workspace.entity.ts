import { Schema, model } from 'mongoose';
import { Task } from '@src/modules/task/task.entity';

export interface IWorkspace {
  name: string;
  color?: string;
  ownerId: string;
  default?: Boolean;
}

const WorkspaceSchema = new Schema<IWorkspace>(
  {
    name: { type: String, required: true },
    color: { type: String, required: false },
    ownerId: { type: String, required: true },
    default: { type: Boolean, required: true, default: false },
  },
  { versionKey: false },
);

WorkspaceSchema.post('findOneAndDelete', async (doc, next) => {
  await Task.deleteMany({ workspaceId: doc._id });
  next();
});

export const Workspace = model('workspace', WorkspaceSchema);
