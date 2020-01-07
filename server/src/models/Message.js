const mongoose = require("mongoose");
const User = require("./User");

const messageSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true,
        maxlength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true });

messageSchema.pre("remove", async function(next){
    const user = await User.findById(this.user).catch(err => next(err))
    user.messages.remove(this._id)
    await user.save().catch(err => next(err));
    return next();
})

module.exports = mongoose.model("Message", messageSchema);