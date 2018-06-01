import express from 'express';
import { songRouter } from './resources/song';
import { userRouter } from './resources/user/user.router';
import { playListRouter } from './resources/playlist';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter);
restRouter.use('/users', userRouter);
restRouter.use('/playlist', playListRouter);
