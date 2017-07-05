'use strict';
module.exports = function(sequelize, DataTypes) {
  var Type_File = sequelize.define('Type_File', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Type_File.hasMany(models.File);
      }
    }
  });
  return Type_File;
};