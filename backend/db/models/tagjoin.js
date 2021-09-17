'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagJoin = sequelize.define('TagJoin', {
    storyId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TagJoin.associate = function(models) {
    // associations can be defined here
  };
  return TagJoin;
};