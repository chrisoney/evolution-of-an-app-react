'use strict';
module.exports = (sequelize, DataTypes) => {
  const Placement = sequelize.define('Placement', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    bookshelfId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // }
  }, {});
  Placement.associate = function(models) {
    Placement.belongsTo(models.Story, { foreignKey: 'storyId' })
    Placement.belongsTo(models.Bookshelf, { foreignKey: 'bookshelfId' })
  };
  return Placement;
};