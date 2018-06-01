import Joi from 'joi';

export default {
  validateBody(body) {
    const schema = Joi.object().keys({
      songs: Joi.array()
        .items()
        .required(),
      name: Joi.string().required(),
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
};
