const cors = require('cors')

class Cors {
    constructor(app) {
        app.use(cors())
    }
}

module.exports = Cors