import { Schema, model } from 'mongoose';

export interface IWorkspace {
  name: string;
  ownerId: string;
  tasks: Schema.Types.ObjectId[];
}

const WorkspaceSchema = new Schema<IWorkspace>(
  {
    name: { type: String, required: true },
    ownerId: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task', required: true }],
  },
  { versionKey: false },
);

export const Workspace = model('workspace', WorkspaceSchema);
