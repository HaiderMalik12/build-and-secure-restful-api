import mongoose from 'mongoose';

export const STANDARD_ROLE = 2;
export const ARTIST_ROLE = 1;
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    default: 2,
    required: true,
    type: Number,
  },
});

export default mongoose.model('User', userSchema);
