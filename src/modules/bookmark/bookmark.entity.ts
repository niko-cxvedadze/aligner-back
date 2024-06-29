import { Schema, model } from 'mongoose';

export interface IBookmark {
  title: string;
  url: string;
  topicId?: Schema.Types.ObjectId;
  workspaceId: Schema.Types.ObjectId;
}

const BookmarkSchema = new Schema<IBookmark>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    topicId: {
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
  { versionKey: false },
);

export const Bookmark = model('bookmark', BookmarkSchema);
