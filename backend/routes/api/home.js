const express = require("express");
const asyncHandler = require("express-async-handler");

const { User, Video, Review, Genre } = require("../../db/models");

const router = express.Router();

router.get(
  "/home",
  asyncHandler(async (req, res, next) => {
    const videos = await Video.findAll({
      include: {
        model: Review,
        include: User,
      },
    });
    let videoObj = {};
    videos.map((video) => {
      videoObj[video.id] = video.dataValues;
    });
    console.log(videoObj);
    return res.json({
      videoObj,
    });
  })
);

module.exports = router;