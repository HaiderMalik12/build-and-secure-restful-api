const mongoose = require('mongoose');

mongoose.Promise = global.Promise
export const connect = () =>mongoose.connect('mongodb://127.0.0.1/music_api')