const { Message, User } = require("../models");

exports.createMessage = async function (req, res, next){   
    const message = await Message.create(
        {
            text: req.body.text,
            user: req.params.id
        }).catch(err => next(err))

    const user = await User.findById(req.params.id);
    user.messages.push(message._id);
    await user.save();
    await message.populate("user", { username: true, profileImageUrl: true }).execPopulate();
    return res.json(message);
}

exports.getMessage = async function(req, res, next){
    const message = await Message.findById(req.params.message_id).catch(err => next(err));
    if (message) return res.json(message)
}

exports.removeMessage = async function (req, res, next){
    const message = await Message.findOne({ _id: req.params.message_id }).catch(err => next(err));
    if (!message) return;
    await message.remove();
    return res.json(message);
}

exports.getAllMessages = async function (req, res, next){
    const messages = await Message
        .find()
        .populate("user", { username: true, profileImageUrl: true })
        .lean()
        .catch(err => next(err));    
    return res.json(messages);
}