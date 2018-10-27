'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    open: DataTypes.BOOLEAN
  }, {});
  Farm.associate = function(models) {
    // associations can be defined here
  };
  return Farm;
};