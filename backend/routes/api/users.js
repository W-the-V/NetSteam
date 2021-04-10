const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Video, ProfilePicture } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);
    const videos = await Video.findAll();
    let videoObj = {};
    videos.map((video) => {
      videoObj[video.id] = video.dataValues;
    });
    return res.json({
      user,
      videoObj,
    });
  })
);

router.get(
  "/profile",
  asyncHandler(async (req, res) => {
    let picturesArr = await ProfilePicture.findAll();
    let pictures = {};
    picturesArr.map((picture) => {
      pictures[picture.id] = picture.dataValues;
    });
    return res.json({ pictures });
  })
);

module.exports = router;
