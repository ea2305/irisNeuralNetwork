'use strict';
module.exports = function(sequelize, DataTypes) {
  var File = sequelize.define('File', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        File.belongsTo(models.User);
        file.belongsTo(models.Type_File);
      }
    }
  });
  return File;
};