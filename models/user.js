'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    birthdate: DataTypes.DATE,
    iris_weight_path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.File);
      }
    },
    instanceMethods: {
        generateHash: function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
        },
    }
  });
  return User;
};