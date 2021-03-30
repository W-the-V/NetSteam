"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      userId: DataTypes.INTEGER,
      embedCode: DataTypes.TEXT,
      title: DataTypes.STRING,
      about: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    {}
  );
  Video.associate = function (models) {
    Video.hasMany(models.UserList, { foreignKey: "videoId" });
  };
  return Video;
};
