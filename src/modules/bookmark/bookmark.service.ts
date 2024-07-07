import { FilterQuery } from 'mongoose';
import { Bookmark, IBookmark } from './bookmark.entity';
import { TGetBookmarksQuery } from './dtos/get-bookmarks.dto';
import { TCreateBookmarkBody } from './dtos/create-bookmark.dto';
import { TUpdateBookmarkBody } from './dtos/update-bookmark.dto';

export function createBookmarkService(body: TCreateBookmarkBody) {
  const task = new Bookmark(body);
  return task.save();
}

export function getBookmarksService({
  workspaceId,
  topicId,
}: TGetBookmarksQuery) {
  const filtersObject: FilterQuery<IBookmark> = {};
  let filtersList: FilterQuery<IBookmark>['$and'] = [
    { workspaceId: { $eq: workspaceId } },
  ];

  if (topicId) {
    filtersList.push({ topicId: { $eq: topicId } });
  }

  if (filtersList.length > 0) {
    filtersObject.$and = filtersList;
  }

  return Bookmark.find(filtersObject).populate('topic');
}

export async function getBookmarkByIdService(bookmarkId: string) {
  const bookmark = await Bookmark.findById(bookmarkId);
  if (!bookmark) {
    throw new Error('Bookmark not found');
  }
  return bookmark;
}

export async function deleteBookmarkService(bookmarkId: string) {
  const deletedBookmark = await Bookmark.findOneAndDelete({ _id: bookmarkId });

  if (!deletedBookmark) {
    throw new Error('Bookmark not found');
  }
  return deletedBookmark;
}

export async function updateBookmarkService(
  bookmarkId: string,
  body: TUpdateBookmarkBody,
) {
  const updatedBookmark = await Bookmark.findByIdAndUpdate(
    bookmarkId,
    {
      $set: body,
    },
    { new: true },
  );

  if (!updatedBookmark) {
    throw new Error('Bookmark not found');
  }

  return updatedBookmark;
}
