const {
    getAllMovie,
    createMovie,
    updateMovie,
    deleteMovie,
} = require("../services/movieService");

class movieController {
    async getAllMovies(req, res) {
        try {
            const result = await getAllMovie();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async createMovies(req, res) {
        try {
            console.log(req.body);
            const result = await createMovie(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateMovies(req, res) {
        try {
            const result = await updateMovie(req.body, req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteMovies(req, res) {
        try {
            const result = await deleteMovie(req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new movieController();