import { Schema, model } from 'mongoose';

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

export const BookmarkTopic = model('bookmarkTopic', BookmarkTopicSchema);
