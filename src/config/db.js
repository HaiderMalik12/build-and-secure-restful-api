import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
export const connect = () => mongoose.connect('mongodb://localhost/music_api');
