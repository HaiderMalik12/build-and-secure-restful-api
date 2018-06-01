import Joi from 'joi';
import Song from './song.model';

export default {
  async create(req, res) {
    try {
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
      const song = await Song.create(Object.assign({}, value, { artist: req.user._id }));
      return res.json(song);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findAll(req, res) {
    try {
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
        populate: {
          path: 'artist',
          select: 'firstName lastName',
        },
      };
      const songs = await Song.paginate({}, options);
      return res.json(songs);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async findOne(req, res) {
    try {
      const { id } = req.params;
      const song = await Song.findById(id).populate('artist', 'firstName lastName');
      if (!song) {
        return res.status(404).json({ err: 'could not find song' });
      }
      return res.json(song);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const song = await Song.findOneAndRemove({ _id: id });
      if (!song) {
        return res.status(404).json({ err: 'could not find song' });
      }
      return res.json(song);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const schema = Joi.object().keys({
        title: Joi.string().optional(),
        url: Joi.string().optional(),
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
      const song = await Song.findOneAndUpdate({ _id: id }, value, { new: true });
      if (!song) {
        return res.status(404).json({ err: 'could not find song' });
      }
      return res.json(song);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
