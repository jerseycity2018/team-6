'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};