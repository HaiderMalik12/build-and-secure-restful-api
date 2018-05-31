import express from 'express';
import passport from 'passport';
import songController from './song.controller';

export const songRouter = express.Router();
// 1.authenticated user can view all the songs
// 2.an artist can create, update, and delete song

songRouter
  .route('/')
  .post(passport.authenticate('jwt', { session: false }), songController.create)
  .get(passport.authenticate('jwt', { session: false }), songController.findAll);

songRouter
  .route('/:id')
  .get(passport.authenticate('jwt', { session: false }), songController.findOne)
  .delete(passport.authenticate('jwt', { session: false }), songController.delete)
  .put(passport.authenticate('jwt', { session: false }), songController.update);
