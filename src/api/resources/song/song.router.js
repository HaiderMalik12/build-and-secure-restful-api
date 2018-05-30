import express from 'express';
import songController from './song.controller';

export const songRouter = express.Router();
songRouter
  .route('/')
  .post(songController.create)
  .get(songController.findAll);

songRouter
  .route('/:id')
  .get(songController.findOne)
  .delete(songController.delete)
  .put(songController.update);
