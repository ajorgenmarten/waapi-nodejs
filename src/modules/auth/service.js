const { Post, Get } = require("../../@decorators/route")

class AuthService {
    login = Post(
        '/login',
        function (req, res) {
            res.json({ message: 'login' })
        }
    )

    me = Get(
        '/me',
        function (req, res) {
            res.json({ message: 'me' })
        }
    )
}

module.exports = AuthService