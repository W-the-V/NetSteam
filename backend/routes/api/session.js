const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Video, ProfilePicture } = require("../../db/models");

const router = express.Router();

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid email or username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

const validateEdit = [
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  handleValidationErrors,
];

// Log in
router.post(
  "/",
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;
    let user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    oldUser = user;
    user = await User.findOne({
      where: { id: user.id },
      include: ProfilePicture,
    });
    user["email"] = oldUser.email;
    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.post(
  "/edit",
  asyncHandler(async (req, res, next) => {
    const { id, info, username } = req.body;
    if (info.username.length < 5) {
      return res.json({ errors: "Username must be more than 4 characters" });
    }
    if (info.username.includes("@")) {
      return res.json({ errors: "Username cannot be an email" });
    }
    user = await User.findOne({
      where: id,
    });

    user.username = info.username;
    user.profilePictureId = info.profilePictureId;
    await user.save();
    return res.json({ user });
  })
);

// Log out
router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

// Restore session user
router.get(
  "/",
  restoreUser,
  asyncHandler(async (req, res, next) => {
    let { user } = req;
    if (user) {
      user = user.toSafeObject();
      return res.json({
        user,
      });
    } else return res.json({});
  })
);

module.exports = router;
