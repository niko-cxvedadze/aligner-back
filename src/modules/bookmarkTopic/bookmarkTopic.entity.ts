import { Schema, model } from 'mongoose';
import { Bookmark } from '../bookmark/bookmark.entity';

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

BookmarkTopicSchema.post('findOneAndDelete', async (doc, next) => {
  await Promise.all([Bookmark.deleteMany({ topicId: doc._id })]);
  next();
});

export const BookmarkTopic = model('bookmarkTopic', BookmarkTopicSchema);
