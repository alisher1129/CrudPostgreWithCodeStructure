const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

//model
const Author = sequelize.define("author", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    authorName: {
        type: DataTypes.STRING,
    },

});


module.exports = Author;