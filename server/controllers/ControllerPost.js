const { Post, User, Category } = require("../models");

class ControllerPost {
    static async addPost(req, res, next) {
        try {
            // res.send('Add post')
            const UserId = req.user.id
            let post = await Post.create({
                ...req.body, UserId
            });

            res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    }

    static async getAllPosts(req, res, next) {
        try {
            // res.send('Get all posts')
            let posts = await Post.findAll({
                where: {status: 'published'},
                include: {
                    model: User,
                    attributes: ['id', 'username', 'email', 'role']

                }
            });

            res.status(200).json(posts)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerPost