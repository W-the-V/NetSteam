const express = require("express");
const asyncHandler = require("express-async-handler");

const { User, Video, Review, Genre } = require("../../db/models");

const router = express.Router();

router.get(
  "/home",
  asyncHandler(async (req, res, next) => {
    const videos = await Video.findAll({
      include: [
        {
          model: Review,
        },
        {
          model: Genre,
        },
      ],
    });
    let genres = await Genre.findAll();
    genres = genres.map((genre) => {
      return genre.dataValues;
    });
    let videoObj = {};
    videos.map((video) => {
      videoObj[video.id] = video.dataValues;
    });
    return res.json({
      videoObj,
      genres,
    });
  })
);

module.exports = router;
