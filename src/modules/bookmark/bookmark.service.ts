import { Bookmark, IBookmark } from './bookmark.entity';
import { FilterQuery } from 'mongoose';
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
  let filtersList: FilterQuery<IBookmark>['$and'] = [{ workspaceId }];

  if (topicId) {
    filtersList.push({ topicId });
  }

  if (filtersList.length > 1) {
    filtersObject._and = filtersList;
  }

  return Bookmark.find(filtersObject);
}

export async function getBookmarkByIdService(bookmarkId: string) {
  const bookmark = await Bookmark.findById(bookmarkId);
  if (!bookmark) {
    throw new Error('Bookmark not found');
  }
  return bookmark;
}

export async function deleteBookmarkService(bookmarkId: string) {
  const bookmark = await getBookmarkByIdService(bookmarkId);
  await Bookmark.findByIdAndDelete(bookmarkId);
  return bookmark;
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
