const express = require("express");
const asyncHandler = require("express-async-handler");

const { User, Video, Review, Genre } = require("../../db/models");

const router = express.Router();

router.get(
  "/video/:videoId",
  asyncHandler(async (req, res, next) => {
    let reviews = await Review.findAll({
      where: { videoId: req.params.videoId },
      include: User,
    });
    let reviewObj = {};
    reviews = reviews.map((review) => {
      reviewObj[review.dataValues.id] = review.dataValues;
    });
    return res.json({ reviewObj });
  })
);

router.post(
  "/video/:videoId",
  asyncHandler(async (req, res, next) => {
    const videoId = req.params.videoId;
    const { recommend, score, commentText, userId } = req.body;
    const review = await Review.create({
      score,
      recommended: recommend,
      userId,
      body: commentText,
      videoId,
    });
    if (review) {
      let reviews = await Review.findAll({
        where: { videoId: req.params.videoId },
        include: User,
      });
      let reviewObj = {};
      reviews = reviews.map((review) => {
        reviewObj[review.dataValues.id] = review.dataValues;
      });
      return res.json({ reviewObj });
    }
  })
);
module.exports = router;
