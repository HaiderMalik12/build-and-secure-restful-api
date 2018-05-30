import Joi from 'joi';

export default {
  async create(req, res) {
    console.log(req.body);
    const schema = Joi.object().keys({
      title: Joi.string().required(),
      url: Joi.string().required(),
      rating: Joi.number()
        .integer()
        .min(0)
        .max(5)
        .optional(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(400).json(error);
    }
    return res.json(value);
  },
};
