const { verifyToken } = require("../helpers/jwt");
const { User } = require('../models')

async function authentication(req, res, next) {
        try {
            const { authorization } = req.headers
            if(!authorization) {
                throw { name : "InvalidToken"}
            }
            const rawToken = authorization.split(' ')
            if(rawToken[0] !== "Bearer") {
                throw { name : "InvalidToken" }
            }
        
            const payload = verifyToken(rawToken[1])
            let user = await User.findByPk(payload.id)
            if(!user) {
                throw { name : "InvalidToken" }
            }
    
            req.user = {
                id: user.id,
                role : user.role
            }
        
            next()
        } catch (error) {
            next(error)
        }
    }

module.exports = authentication