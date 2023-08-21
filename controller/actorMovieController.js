const { getAllActorMovie, createActorMovie,} = require("../services/actorMovieService");
  
  class actorMovieController {
    async getAllActorMovies(req, res) {
      try {
        const result = await getAllActorMovie();
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
    async createActorMovies(req, res) {
      try {
        const actorId = req.query.actorId;
        const movieId = req.query.movieId;
        const result = await createActorMovie(actorId, movieId);
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  module.exports = new actorMovieController();