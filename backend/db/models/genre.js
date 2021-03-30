"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      type: DataTypes.STRING,
    },
    {}
  );
  Genre.associate = function (models) {
    Genre.hasMany(models.Video, { foreignKey: "genreId" });
  };
  return Genre;
};
