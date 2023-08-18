const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

//model
const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    bookName: {
        type: DataTypes.STRING,
    },

});


module.exports = Book;