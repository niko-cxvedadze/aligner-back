import { Request, Response } from 'express';
import {
  createBookmarkTopicService,
  getBookmarkTopicsService,
  getBookmarkTopicByIdService,
  updateBookmarkTopicService,
  deleteBookmarkTopicService,
} from './bookmarkTopic.service';

class BookmarkTopicController {
  async createBookmarkTopic(req: Request, res: Response) {
    try {
      const bookmarkTopic = await createBookmarkTopicService(req.body);
      res.status(201).json(bookmarkTopic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBookmarkTopics(req: Request, res: Response) {
    try {
      const bookmarkTopics = await getBookmarkTopicsService(
        req.params.workspaceId,
      );
      res.status(200).json(bookmarkTopics);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBookmarkTopicById(req: Request, res: Response) {
    try {
      const bookmarkTopic = await getBookmarkTopicByIdService(
        req.params.bookmarkTopicId,
      );
      res.status(200).json(bookmarkTopic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBookmarkTopic(req: Request, res: Response) {
    try {
      const bookmarkTopic = await updateBookmarkTopicService(
        req.params.bookmarkTopicId,
        req.body,
      );
      res.status(200).json(bookmarkTopic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBookmarkTopic(req: Request, res: Response) {
    try {
      const bookmarkTopic = await deleteBookmarkTopicService(
        req.params.bookmarkTopicId,
      );
      res.status(200).json(bookmarkTopic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BookmarkTopicController();
