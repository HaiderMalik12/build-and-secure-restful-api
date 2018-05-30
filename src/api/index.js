import express from 'express';
import { songRouter } from './resources/song';

export const restRouter = express.Router();
restRouter.use('/songs', songRouter);
