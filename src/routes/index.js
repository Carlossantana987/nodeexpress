import express from 'express';
import {
  indexPage,
  aboutPage,
  messagesPage,
  addMessage,
  users,
  addUser
} from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();


indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);
indexRouter.get('/messages', messagesPage);
indexRouter.get('/users', users);

indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.post('/users', addUser);

export default indexRouter;
