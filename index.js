const express = require('express')
const Cors = require('./src/@libs/cors')
const RouterLoader = require('./src/@libs/router.loader')
const Parser = require('./src/@libs/parser')
const app = express()
const env = require('./src/@libs/env')
const Morgan = require('./src/@libs/morgan')

new Morgan(app)
new Cors(app)
new Parser(app)
new RouterLoader(app)

app.listen(env.PORT, console.log(`🧱 Server is running on port ${env.PORT}`))