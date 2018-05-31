import userService from './user.service';

export default {
  signup(req, res) {
    const { value, error } = userService.validateSignup(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    return res.json(value);
  },
};
