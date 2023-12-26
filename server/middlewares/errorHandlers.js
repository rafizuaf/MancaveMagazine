module.exports = (error, req, res, next) => {
    let status = error.status || 500
    let message = error.message || "Internal server error"

    console.log(error, "<<<<< errorhandler ");

    switch (error.name) {
        case "BadRequest":
            status = 400;
            message = "Email or password is required";
            break;
        case "Unauthorized":
            status = 401;
            message = "Wrong email or password"
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = error.errors[0].message
            break;
        case "InvalidToken":
        case "JsonWebTokenError":
            status = 401;
            message = "Invalid token"   
            break;
        case "Forbidden":
            status = 403;
            message = "You are not authorized"
        case "NotFound":
            status = 404;
            message = "Post not found"
            break;
    }
    res.status(status).json({
        message
    })
};