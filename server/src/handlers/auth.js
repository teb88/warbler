const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.signUpHandler = async function(req, res, next){
    const user = await User.create(req.body).catch(err => next(err));
    const { _id, username, profileImageUrl, token } = tokenize(user);
    return res.json({ _id, username, profileImageUrl, token })
}

exports.signInHandler = async function(req, res, next){
    const user = await User.findOne({ email: req.body.email }).catch(err => next(err));
    const isMatch = await user.comparePassword(req.body.password);
    
    if (isMatch){        
        const { _id, username, profileImageUrl, token } = tokenize(user);
        return res.json({ _id, username, profileImageUrl, token });
    } else {
        return next({
            status: 400,
            message: "Invalid email or password"
        })
    }

}

function tokenize( { _id, username, profileImageUrl }){
    return { _id, username, profileImageUrl, token: jwt.sign({ _id, username, profileImageUrl }, process.env.SECRET_KEY) };
}