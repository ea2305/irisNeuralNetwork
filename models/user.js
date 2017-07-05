'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    iris_weight_path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.File);
      }
    }
  });
  return User;
};