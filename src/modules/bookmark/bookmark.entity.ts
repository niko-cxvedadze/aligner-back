import { Schema, model } from 'mongoose';
import { Workspace } from '../workspace/workspace.entity';

export interface IBookmark {
  title: string;
  url: string;
  topic?: Schema.Types.ObjectId;
  workspaceId: Schema.Types.ObjectId;
}

const BookmarkSchema = new Schema<IBookmark>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    topic: {
      type: Schema.Types.ObjectId,
      default: null,
      required: false,
      ref: 'bookmarkTopic',
    },
    workspaceId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'workspace',
    },
  },
  { versionKey: false, timestamps: true },
);

BookmarkSchema.pre('save', async function (next) {
  const workspace = await Workspace.findById(this.workspaceId);
  if (!workspace) {
    throw new Error('Workspace not found');
  }
  next();
});

export const Bookmark = model('bookmark', BookmarkSchema);
