import { songRouter } from './resources/song';

const express=require('express')
export const restRouter= express.Router();

restRouter.use('/songs',songRouter)