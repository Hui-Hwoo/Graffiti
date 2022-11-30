const jwt = require("jsonwebtoken")
const HttpError = require("../models/http-error");

//you may want to combine the auth part with crud of users part, so that duplicated functions and folders can be avoided 
module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            return next(new HttpError("Authentication failed!", 401));
        }
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = {userId: decodedToken.userId};
        next();
    } catch (err) {
        return next(new HttpError("Authentication failed!", 401));
    }
};
