'use strict';
module.exports = (sequelize, DataTypes) => {
  const Placement = sequelize.define('Placement', {
    bookshelfId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Placement.associate = function(models) {
    // associations can be defined here
  };
  return Placement;
};