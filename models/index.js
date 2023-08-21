const sequelize = require('../config/db');
const bookModel = require('./bookModel');
const authorModel = require('./authorModel');
const studentModel = require('./studentModel');
const City = require('./cityModel');
const Actor = require('./actorModdel');
const Movie = require('./movieModel');
const actorMovieModel = require("./actorMovieModel");

(async () => {
  try {
    // (ONE-TO-ONE) Relation between student and City 
    studentModel.hasOne(City, {
      foreignKey: 'studentId',
      as: 'city',
      // onDelete: 'CASCADE'
    });
    City.belongsTo(studentModel, {
      foreignKey: 'studentId',
      as: 'student',
      // onDelete: 'CASCADE'
    });


    // (ONE-TO-MANY) Relation between Author and Books 
    authorModel.hasMany(bookModel, {
      foreignKey: 'authorId',
      as: 'book',
    });
    bookModel.belongsTo(authorModel, {
      foreignKey: 'authorId',
      as: 'author',
    });


    //(ONE-TO-MANY) Relation between Actors and Movies  
    Actor.belongsToMany(Movie, {
      through: 'actor_movie',
      foreignKey: '',
      as: 'movie'
    });
    Movie.belongsToMany(Actor, {
      through: 'actor_movie',
      foreignKey: '',
      as: 'actor'
    })

    actorMovieModel.belongsTo(Actor);
    actorMovieModel.belongsTo(Movie);




    await sequelize.sync({ force: false }); // This will drop existing tables and create new ones

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();