//import Sequelize from sequelize.
const { Sequelize } = require("sequelize");

// Connection parameters
const sequelize = new Sequelize('tecmintdb', 'alisher1', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false,
});

// Test the connection

        sequelize.authenticate()
        .then(()=> console.log("Connection has been established successfully."))
    .catch ((error) => {
        console.error("Unable to connect to the database:", error)});
    

//export the sequelize instance

module.exports = sequelize;