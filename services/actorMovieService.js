const Actor = require('../models/actorModdel');
const Movie = require('../models/movieModel');


class actorMovieData {
    async getAllActorMovie() {
        try {
            const allActorMovie = await Actor.findAll({
                include: { model: Movie, as: "movie" },
            });
            const actorsWithMovies = allActorMovie.filter(actor => actor.movie.length > 0);

            return actorsWithMovies;
        } catch (err) {
            console.log(err);
        }
    }


    async createActorMovie(actorId, movieId) {
        try {
            const actor = await Actor.findByPk(actorId);
            const movie = await Movie.findByPk(movieId);
            if (!actor) {
                return { error: "Actor does not exist" };
            }
            if (!movie) {
                return { error: "Movie does not exist" };
            }
            await actor.addMovie(movie);
            return { message: "Actor and Movie added successfully" };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
module.exports = new actorMovieData();