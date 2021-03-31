"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      score: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      videoId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Video, { foreignKey: "videoId" });
  };
  return Review;
};
