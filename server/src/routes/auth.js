const router = require("express").Router();
const { signUpHandler, signInHandler } = require("../handlers/auth");

router.post("/signup", signUpHandler)
router.post("/signin", signInHandler)

module.exports = router;