'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TagJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Stories' },
        unique: 'tagjoins_unique'
      },
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Tags' },
        unique: 'tagjoins_unique'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    }, {
      uniqueKeys: {
        tagjoins_unique: {
          fields: ['storyId', 'tagId']
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TagJoins');
  }
};