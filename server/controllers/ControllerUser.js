const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
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
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "BadRequest" }
            };

            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: "Unauthorized" }
            };

            const isPasswordValid = comparePassword(password, user.password)
            if (!isPasswordValid) {
                throw { name: "Unauthorized" }
            }

            let access_token = signToken({ id: user.id, role: user.role })

            res.status(200).json({ access_token })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerUser