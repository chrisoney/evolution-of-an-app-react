'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Placements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookshelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Bookshelves' },
        unique: 'placements_unique'
      },
      storyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Stories' },
        unique: 'placements_unique'
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
        placements_unique: {
            fields: ['bookshelfId', 'storyId']
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Placements');
  }
};