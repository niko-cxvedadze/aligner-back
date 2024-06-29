import { Router } from 'express';
import BookmarkController from './bookmark.controller';
import { CreateBookmarkBodyDto } from './dtos/create-bookmark.dto';
import { UpdateBookmarkBodyDto } from './dtos/update-bookmark.dto';
import { GetBookmarksQueryDto } from './dtos/get-bookmarks.dto';
import {
  validateBody,
  validateQS,
} from '@src/middlewares/validateBody.middleware';

export const BookmarkRouter = Router();

BookmarkRouter.get(
  '/',
  validateQS(GetBookmarksQueryDto),
  BookmarkController.getBookmarks,
);

BookmarkRouter.get('/:bookmarkId', BookmarkController.getBookmarkById);

BookmarkRouter.post(
  '/',
  validateBody(CreateBookmarkBodyDto),
  BookmarkController.createBookmark,
);

BookmarkRouter.put(
  '/:bookmarkId',
  validateBody(UpdateBookmarkBodyDto),
  BookmarkController.updateBookmark,
);

BookmarkRouter.delete('/:bookmarkId', BookmarkController.deleteBookmark);
