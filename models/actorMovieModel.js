const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");


//model
const actorMovie = sequelize.define("actor_movie", {

    // No attributes needed, just the foreign keys

});


module.exports = actorMovie;