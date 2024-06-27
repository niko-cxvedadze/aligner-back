import { Request, Response } from 'express';
import {
  createBookmarkService,
  getBookmarksService,
  deleteBookmarkService,
  getBookmarkByIdService,
} from './bookmark.service';

class BookmarkController {
  async createBookmark(req: Request, res: Response) {
    try {
      const bookmark = await createBookmarkService(req.body);
      res.status(201).send(bookmark);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getBookmarks(req: Request, res: Response) {
    try {
      const bookmarks = await getBookmarksService(req.query as any);
      res.status(200).send(bookmarks);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async deleteBookmark(req: Request, res: Response) {
    try {
      const bookmark = await deleteBookmarkService(req.params.id);
      res.status(200).send(bookmark);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default new BookmarkController();
