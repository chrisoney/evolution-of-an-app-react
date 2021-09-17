'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    pageCount: DataTypes.INTEGER,
    linkUrl: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    warnings: DataTypes.JSON,
    status: DataTypes.STRING
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};