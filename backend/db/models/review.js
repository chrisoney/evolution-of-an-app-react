'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        max: 5,
        min: 1,
      }
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    storyId: {
      type: DataTypes.INTEGER,
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Story, { foreignKey: 'storyId' })
  };
  return Review;
};