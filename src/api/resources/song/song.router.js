import express from 'express';
import passport from 'passport';
import songController from './song.controller';
import { isArtist } from '../../middlewares/is-artist';

export const songRouter = express.Router();
// 1.authenticated user can view all the songs
// 2.an artist can create, update, and delete song

const artistPolicy = [passport.authenticate('jwt', { session: false }), isArtist];
songRouter
  .route('/')
  .post(artistPolicy, songController.create)
  .get(passport.authenticate('jwt', { session: false }), songController.findAll);

songRouter
  .route('/:id')
  .get(passport.authenticate('jwt', { session: false }), songController.findOne)
  .delete(artistPolicy, songController.delete)
  .put(artistPolicy, songController.update);
