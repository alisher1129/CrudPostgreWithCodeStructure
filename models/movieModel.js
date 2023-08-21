const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

//model
const Movie = sequelize.define("movie", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    movieName: {
        type: DataTypes.STRING,
    },


});


module.exports = Movie;