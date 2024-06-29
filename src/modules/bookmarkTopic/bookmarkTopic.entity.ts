import { Schema, model } from 'mongoose';
import { Bookmark } from '../bookmark/bookmark.entity';
import { Workspace } from '../workspace/workspace.entity';

export interface IBookmarkTopic {
  title: string;
  workspaceId: Schema.Types.ObjectId;
}

const BookmarkTopicSchema = new Schema<IBookmarkTopic>(
  {
    title: { type: String, required: true },
    workspaceId: {
      required: true,
      ref: 'workspace',
      type: Schema.Types.ObjectId,
    },
  },
  { versionKey: false },
);

BookmarkTopicSchema.pre('save', async function (next) {
  const workspace = await Workspace.findById(this.workspaceId);
  if (!workspace) {
    throw new Error('Workspace not found');
  }
  next();
});

BookmarkTopicSchema.post('findOneAndDelete', async (doc, next) => {
  await Promise.all([Bookmark.deleteMany({ topicId: doc._id })]);
  next();
});

export const BookmarkTopic = model('bookmarkTopic', BookmarkTopicSchema);
