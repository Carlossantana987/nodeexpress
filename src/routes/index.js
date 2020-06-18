import express from 'express';
import {
  indexPage,
  aboutPage,
  messagesPage,
  addMessage,
  users
} from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);

indexRouter.get('/about', aboutPage);

indexRouter.get('/messages', messagesPage);

indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

indexRouter.get('/users', users)

export default indexRouter;
