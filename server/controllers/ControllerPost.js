const { Post, Moderation } = require("../models");

class ControllerPost {
    static async addPost (req, res, next) {
        try {
            // res.send('Add post')
            const UserId = req.user.id
            let post = await Post.create({
                ...req.body, UserId
            })
            await Moderation.create({
                PostId: post.id,
                UserId
            })

            let blogPost = await Moderation.findOne({
                where: { PostId: post.id }, 
                include: Post
            });

            res.status(201).json(blogPost)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerPost