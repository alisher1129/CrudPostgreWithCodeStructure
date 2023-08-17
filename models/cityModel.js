const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

//model
const City = sequelize.define("city", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    cityName: {
        type: DataTypes.STRING,
    },

});


module.exports = City;