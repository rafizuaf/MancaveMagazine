class User {
    static async register(req, res, next) {
        try {
            res.send('Register')
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

module.exports = User