"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      embedURL: DataTypes.TEXT,
      title: DataTypes.STRING,
      about: DataTypes.TEXT,
      genreId: DataTypes.INTEGER,
      imageURL: DataTypes.TEXT,
      developer: DataTypes.STRING,
      publisher: DataTypes.STRING,
    },
    {}
  );
  Video.associate = function (models) {
    Video.hasMany(models.UserList, { foreignKey: "videoId" });
    Video.hasMany(models.Review, { foreignKey: "videoId" });
  };
  return Video;
};
