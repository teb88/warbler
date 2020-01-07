const router = require("express").Router({ mergeParams: true })
const { createMessage, removeMessage, getMessage, getAllMessages } = require("../handlers/messages");
const { isLoginRequired, isAuthorized } = require("../middleware/auth")

router
    .get("/", getAllMessages);

router
    .post("/", isLoginRequired, isAuthorized, createMessage);

router
    .route("/:message_id")
    .get(isLoginRequired, isAuthorized, getMessage)
    .delete(isLoginRequired, isAuthorized, removeMessage);

module.exports = router;
    