const movieModel = require("../models/movieModel");
const actorModel = require("../models/actorModdel");

class movieData {

    async getAllMovie() {
        try {
            const movie = await movieModel.findAll();
            return movie;
        } catch (err) {
            console.log(err);
        }
    }
    async createMovie(req,studentId) {
        try {
            const newMovie = await movieModel.create(req);
        //    const newActor = await actorModel.findByPk(studentId);
        //    if(!newActor){
            // return { error: "Actor not found" };
        //    }
        //    await newActor.setMovie(newMovie);
           return newMovie;
        } catch (err) {
            console.log(err);
        }
    }

    async updateMovie(req, id) {
        try {
            const movie = await movieModel.update(req, { where: { id: id } });
            return movie;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteMovie(id) {
        try {
            const movie = await movieModel.destroy({ where: { id: id } });
            const result = await movieModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new movieData();

