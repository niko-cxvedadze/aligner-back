import { Schema, model } from 'mongoose';

export interface IWorkspace {
  name: string;
  ownerId: string;
  tasks: Schema.Types.ObjectId[];
  default?: Boolean;
}

const WorkspaceSchema = new Schema<IWorkspace>(
  {
    name: { type: String, required: true },
    ownerId: { type: String, required: true },
    default: { type: Boolean, required: true, default: false },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task', required: true }],
  },
  { versionKey: false },
);

export const Workspace = model('workspace', WorkspaceSchema);
