import { Schema, model } from 'mongoose';

export interface IWorkspace {
  name: string;
  owner: string;
}

const WorkspaceSchema = new Schema<IWorkspace>({
  name: { type: String, required: true },
  owner: { type: String, required: true },
});

export const Workspace = model('workspace', WorkspaceSchema);
