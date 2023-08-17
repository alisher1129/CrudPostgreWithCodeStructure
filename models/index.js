const sequelize = require('../config/db'); 
const Student = require('./studentModel'); 
const City = require('./cityModel');

(async () => {
  try {

    // (ONE-TO-ONE) Relation between user and profile 
    Student.hasOne(City, {
      foreignKey: 'studentId',
      as: 'city',
      onDelete: 'CASCADE'
    });
    City.belongsTo(Student, {
      foreignKey: 'studentId',
      as: 'student',
      onDelete: 'CASCADE'
    });


    // (ONE-TO-MANY) Relation between User and article 
    // User.hasMany(Article, {
    //   foreignKey: 'userId',
    //   as: 'article',
    // });
    // Article.belongsTo(User, {
    //   foreignKey: 'userId',
    //   as: 'user',
    // });

    await sequelize.sync({ force: false }); // This will drop existing tables and create new ones

    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();