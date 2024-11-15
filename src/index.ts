import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import { connectMongoDB } from '@src/shared/mongoDB';
import { errorHandler } from '@src/middlewares/errorHandler.middleware';
import { AuthMiddleware } from '@src/middlewares/auth.middleware';

import { TaskRouter } from '@src/modules/task/task.router';
import { BookmarkRouter } from '@src/modules/bookmark/bookmark.router';
import { WorkspaceRouter } from './modules/workspace/workspace.router';
import { BookmarkTopicRouter } from './modules/bookmarkTopic/bookmarkTopic.router';

dotenv.config();
const PORT: number = parseInt(process.env['PORT'] as string, 10);

if (!process.env['PORT']) {
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

async function main() {
  await connectMongoDB();

  app.use('/api/task', AuthMiddleware(), TaskRouter);
  app.use('/api/workspace', AuthMiddleware(), WorkspaceRouter);
  app.use('/api/bookmark', AuthMiddleware(), BookmarkRouter);
  app.use('/api/bookmark-topic', AuthMiddleware(), BookmarkTopicRouter);

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

main();
