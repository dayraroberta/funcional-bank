'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.UserAccounts);
    }
  };
  Users.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthday: DataTypes.DATE,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true
  });
  return Users;
};