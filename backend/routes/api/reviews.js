const express = require("express");
const asyncHandler = require("express-async-handler");

const {
  User,
  Video,
  Review,
  Genre,
  ProfilePicture,
} = require("../../db/models");

const router = express.Router();

router.get(
  "/video/:videoId",
  asyncHandler(async (req, res, next) => {
    let reviews = await Review.findAll({
      where: { videoId: req.params.videoId },
      include: [
        {
          model: User,
          include: ProfilePicture,
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    let reviewObj = {};
    reviews = reviews.map((review) => {
      reviewObj[review.dataValues.id] = review.dataValues;
    });
    return res.json({ reviewObj });
  })
);

router.post("/video/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  const { recommend, score, commentText, userId } = req.body;
  console.log(userId);
  const review = await Review.create({
    score,
    recommended: recommend,
    userId,
    body: commentText,
    videoId,
  });
  if (review) {
    let returnReview = await Review.findOne({
      where: {
        id: review.dataValues.id,
      },
      include: [
        {
          model: User,
          include: ProfilePicture,
        },
      ],
    });
    returnReview = returnReview.dataValues;
    if (returnReview) return res.json({ returnReview });
  }
});

router.post(
  "/:reviewId",
  asyncHandler(async (req, res, next) => {
    const reviewId = req.params.reviewId;
    const { recommend, score, commentText, userId } = req.body;
    const review = await Review.findByPk(reviewId);
    if (userId !== review.userId) return;
    const videoId = review.videoId;
    review.score = score;
    review.recommended = recommend;
    review.body = commentText;
    await review.save();

    let reviews = await Review.findAll({
      where: { videoId },
      include: [
        {
          model: User,
          include: ProfilePicture,
        },
      ],
    });
    let reviewObj = {};
    reviews = reviews.map((review) => {
      reviewObj[review.dataValues.id] = review.dataValues;
    });

    return res.json({ reviewObj });
  })
);

router.delete(
  "/:reviewId",
  asyncHandler(async (req, res, next) => {
    const reviewId = req.params.reviewId;
    const { userId } = req.body;
    const review = await Review.findByPk(reviewId);
    if (userId !== review.userId) return;

    await review.destroy();

    return res.json({ reviewId });
  })
);
module.exports = router;
