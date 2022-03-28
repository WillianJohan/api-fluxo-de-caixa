'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('receipts', { 
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        value: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        is_done: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('receipts');
  }
};
