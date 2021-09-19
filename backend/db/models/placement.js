'use strict';
module.exports = (sequelize, DataTypes) => {
  const Placement = sequelize.define('Placement', {
    bookshelfId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Placement.associate = function(models) {
    Placement.belongsTo(models.Story, { foreignKey: 'storyId' })
    Placement.belongsTo(models.Bookshelf, { foreignKey: 'bookshelfId' })
  };
  return Placement;
};