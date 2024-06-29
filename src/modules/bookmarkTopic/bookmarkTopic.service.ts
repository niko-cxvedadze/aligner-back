import { BookmarkTopic } from './bookmarkTopic.entity';
import { TUpdateBookmarkTopicBody } from './dto/update-bookmark-topic.dto';
import { TCreateBookmarkTopicBody } from './dto/create-bookmark-topic.dto';

export function createBookmarkTopicService(data: TCreateBookmarkTopicBody) {
  const bookmarkTopic = new BookmarkTopic(data);
  return bookmarkTopic.save();
}

export function getBookmarkTopicsService(workspaceId: string) {
  return BookmarkTopic.find({ workspaceId });
}

export async function getBookmarkTopicByIdService(bookmarkTopicId: string) {
  const bookmarkTopic = await BookmarkTopic.findById(bookmarkTopicId);

  if (!bookmarkTopic) {
    throw new Error('BookmarkTopic not found');
  }

  return bookmarkTopic;
}

export async function deleteBookmarkTopicService(bookmarkTopicId: string) {
  const deletedBookmarkTopic = await BookmarkTopic.findByIdAndDelete(
    bookmarkTopicId,
  );
  if (!deletedBookmarkTopic) {
    throw new Error('BookmarkTopic not found');
  }
  return deletedBookmarkTopic;
}

export async function updateBookmarkTopicService(
  bookmarkTopicId: string,
  data: TUpdateBookmarkTopicBody,
) {
  const updatedBookmarkTopic = await BookmarkTopic.findByIdAndUpdate(
    bookmarkTopicId,
    { $set: data },
    { new: true },
  );

  if (!updatedBookmarkTopic) {
    throw new Error('BookmarkTopic not found');
  }

  return updatedBookmarkTopic;
}
