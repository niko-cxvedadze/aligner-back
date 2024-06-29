import { Router } from 'express';
import BookmarkTopicController from './bookmarkTopic.controller';

import { validateBody } from '@src/middlewares/validateBody.middleware';
import { CreateBookmarkTopicBodyDto } from './dto/create-bookmark-topic.dto';
import { UpdateBookmarkTopicBodyDto } from './dto/update-bookmark-topic.dto';

export const BookmarkTopicRouter = Router();

BookmarkTopicRouter.get(
  '/:workspaceId',
  BookmarkTopicController.getBookmarkTopics,
);

BookmarkTopicRouter.post(
  '/',
  validateBody(CreateBookmarkTopicBodyDto),
  BookmarkTopicController.createBookmarkTopic,
);

BookmarkTopicRouter.get(
  '/one/:bookmarkTopicId',
  BookmarkTopicController.getBookmarkTopicById,
);

BookmarkTopicRouter.put(
  '/:bookmarkTopicId',
  validateBody(UpdateBookmarkTopicBodyDto),
  BookmarkTopicController.updateBookmarkTopic,
);

BookmarkTopicRouter.delete(
  '/:bookmarkTopicId',
  BookmarkTopicController.deleteBookmarkTopic,
);
