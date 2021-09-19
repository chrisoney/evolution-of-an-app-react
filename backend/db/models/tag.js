'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING(50)
  }, {});
  Tag.associate = function(models) {
    const columnMapping = {
      through: 'TagJoin',
      foreignKey: 'tagId',
      otherKey: 'storyId'
    }
    Tag.belongsToMany(models.Story, columnMapping);
  };
  return Tag;
};