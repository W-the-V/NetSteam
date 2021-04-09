"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProfilePicture = sequelize.define(
    "ProfilePicture",
    {
      imageLink: DataTypes.STRING,
    },
    {}
  );
  ProfilePicture.associate = function (models) {
    ProfilePicture.hasMany(models.User, { foreignKey: "profilePictureId" });
  };
  return ProfilePicture;
};
