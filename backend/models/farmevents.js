'use strict';
module.exports = (sequelize, DataTypes) => {
  const farmevents = sequelize.define('farmevents', {
    farmId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    eventDate: DataTypes.DATE
  }, {});
  farmevents.associate = function(models) {
    // associations can be defined here
  };
  return farmevents;
};