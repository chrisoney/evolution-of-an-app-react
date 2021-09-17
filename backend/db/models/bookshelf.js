'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deleteAllowed: DataTypes.BOOLEAN
  }, {});
  Bookshelf.associate = function(models) {
    // associations can be defined here
  };
  return Bookshelf;
};