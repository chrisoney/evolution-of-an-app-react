'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    deleteAllowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {});
  Bookshelf.associate = function(models) {
    Bookshelf.belongsTo(models.User, { foreignKey: 'userId' });
    Bookshelf.hasMany(models.Placement, { foreignKey: 'bookshelfId', onDelete: 'CASCADE', hooks: true })

    const columnMapping = {
      through: 'Placement',
      foreignKey: 'bookshelfId',
      otherKey: 'storyId'
    }
    Bookshelf.belongsToMany(models.Story, columnMapping)
  };
  return Bookshelf;
};