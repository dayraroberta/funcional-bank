'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserAccounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      users_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        unique: 'user_account',
        references: {
          model: 'Users', 
          referencesKey: 'id'
        }
      },
      account: {
        type: Sequelize.STRING(45)
      },
      agency: {
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserAccounts');
  }
};