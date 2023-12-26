const { User } = require("../models");

class ControllerUser {
    static async register(req, res, next) {
        try {
            const user = await User.create ({
                ...req.body
            });

            res.status(201).json({
                id: user.id,
                email: user.email,
                username: user.username
            });
        } catch (error) {
            next(error);
        }
    };

    static async login(req, res, next) {
        try {
            res.send('Login')
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerUser