const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

//model
const Actor = sequelize.define("actor", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    actorName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INET,
    },

});


module.exports = Actor;