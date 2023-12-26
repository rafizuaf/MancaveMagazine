const { User, Post } = require("../models")

async function authorization(req, res, next) {
    try {
        // console.log(req.params);
        const {id : PostId} = req.params
        const data = await Post.findByPk(PostId)
        // console.log(data);
        if(!data) {
            throw {
                name: "NotFound"
            }
        }
        // console.log(req.user);
        if(req.user.role === "moderator") {
            return next()
        }
        // let {id} = req.user
        // console.log(data.authorId, id, data.authorId === id);
        if(data.UserId !== id) {
            throw {
                name: "Forbidden"
            }
        }
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = authorization