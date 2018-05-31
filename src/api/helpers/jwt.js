import jwt from 'jsonwebtoken';
import { devConfig } from '../../config/env/development';

export default {
  issue(payload, expiresIn) {
    return jwt.sign(payload, devConfig.secret, {
      expiresIn,
    });
  },
};
