import userService from './user.service';
import User from './user.model';

export default {
  async signup(req, res) {
    try {
      const { value, error } = userService.validateSignup(req.body);
      if (error) {
        return res.status(400).json(error);
      }
      const encryptedPass = userService.encryptPassword(value.password);

      const user = await User.create({
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
        password: encryptedPass,
      });
      return res.json({ success: true });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
