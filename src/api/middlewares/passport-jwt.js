import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: devConfig.secret,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (paylod, done) => {
      User.findOne({ _id: paylod.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};
