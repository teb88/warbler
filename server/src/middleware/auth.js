const jwt = require("jsonwebtoken");

const mustLogin = { status: 401, message: "Please login first" }
const unauthorizedResponse = { status: 401, message: "Unauthorized" }

exports.isLoginRequired = function(req, res, next) {
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (!decoded) return next(mustLogin);
            return next()
        })
    } else return next(mustLogin);
}

exports.isAuthorized = function(req, res, next){
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (decoded && decoded._id === req.params.id) return next();
            else return next(unauthorizedResponse)
        })
    } else return next(unauthorizedResponse);
}