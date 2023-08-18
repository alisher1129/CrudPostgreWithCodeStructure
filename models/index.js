const sequelize = require('../config/db');
const bookModel = require('./bookModel');
const authorModel = require('./authorModel');
const studentModel = require('./studentModel');
const City = require('./cityModel');

(async () => {
  try {
    // (ONE-TO-ONE) Relation between user and profile 
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


    // (ONE-TO-MANY) Relation between User and article 
    authorModel.hasMany(bookModel, {
      foreignKey: 'authorId',
      as: 'book',
    });
    bookModel.belongsTo(authorModel, {
      foreignKey: 'authorId',
      as: 'author',
    });

    await sequelize.sync({ force: false }); // This will drop existing tables and create new ones

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();