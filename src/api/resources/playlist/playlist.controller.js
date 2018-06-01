import playlistService from './playlist.service';
import Playlist from './playlist.model';

export default {
  async create(req, res) {
    try {
      const { value, error } = playlistService.validateBody(req.body);
      if (error && error.details) {
        return res.json(error);
      }
      const playlist = await Playlist.create(Object.assign({}, value, { user: req.user._id }));
      return res.json(playlist);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
