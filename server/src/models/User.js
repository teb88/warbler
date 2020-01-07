const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    profileImageUrl: String,
    messages: [
        {   type: mongoose.Schema.Types.ObjectId, ref: "Message" }
    ]
})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        return next();
    }

    const encrypted = await bcrypt.hash(this.password, 10);    
    this.password = encrypted;
    next();
})

userSchema.methods.comparePassword = async function(candidatePassword, next){
    const isMatch = await bcrypt.compare(candidatePassword, this.password).catch(err => next(err));
    return isMatch;
}

module.exports = mongoose.model("User", userSchema);