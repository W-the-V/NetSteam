"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserList = sequelize.define(
    "UserList",
    {
      videoId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  UserList.associate = function (models) {
    UserList.belongsTo(models.User, { foreignKey: "userId" });
    UserList.belongsTo(models.Video, { foreignKey: "videoId" });
  };
  return UserList;
};
