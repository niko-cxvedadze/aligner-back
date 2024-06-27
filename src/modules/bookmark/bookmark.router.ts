import { Router } from 'express';
import BookmarkController from './bookmark.controller';
import { CreateBookmarkDto } from './dtos/create-bookmark.dto';
import { GetBookmarksDto } from './dtos/get-bookmarks';
import {
  validateBody,
  validateQS,
} from '@src/middlewares/validateBody.middleware';

export const BookmarkRouter = Router();

BookmarkRouter.post(
  '/',
  validateBody(CreateBookmarkDto),
  BookmarkController.createBookmark,
);

BookmarkRouter.get(
  '/',
  validateQS(GetBookmarksDto),
  BookmarkController.getBookmarks,
);
