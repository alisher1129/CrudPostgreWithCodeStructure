const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const City = require("../models/cityModel")

//model
const Student = sequelize.define("student", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    fullName: {
        type: DataTypes.STRING,
    },

    age: {
        type: DataTypes.INTEGER,
    },

});






module.exports = Student;