import songController from './song.controller'

const express = require('express')

export const songRouter = express.Router()

songRouter.route('/')
.post(songController.create)