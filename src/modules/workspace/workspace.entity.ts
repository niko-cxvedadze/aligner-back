import { Schema, model } from 'mongoose';
import { Task } from '@src/modules/task/task.entity';
import { Bookmark } from '../bookmark/bookmark.entity';
import { BookmarkTopic } from '../bookmarkTopic/bookmarkTopic.entity';

export interface IWorkspace {
  name: string;
  color?: string;
  ownerId: string;
  default?: Boolean;
}

const WorkspaceSchema = new Schema<IWorkspace>(
  {
    name: { type: String, required: true },
    color: { type: String, required: false, default: null },
    ownerId: { type: String, required: true },
    default: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

WorkspaceSchema.post('findOneAndDelete', async (doc, next) => {
  await Promise.all([
    Task.deleteMany({ workspaceId: doc._id }),
    Bookmark.deleteMany({ workspaceId: doc._id }),
    BookmarkTopic.deleteMany({ workspaceId: doc._id }),
  ]);

  next();
});

export const Workspace = model('workspace', WorkspaceSchema);
