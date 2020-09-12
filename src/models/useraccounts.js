'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAccounts.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' })
    }
  };
  UserAccounts.init({
    users_id: DataTypes.NUMBER,
    account: DataTypes.STRING,
    agency: DataTypes.NUMBER,
    balance: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UserAccounts',
    paranoid: true
  });
  return UserAccounts;
};