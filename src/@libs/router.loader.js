/** @typedef {import('express').Express} Express */

const fs = require('fs')

class RouterLoader {
    /**
     * @type {string}
     */
    BASE_PATH = './src/modules'
    /**
     * @type { Express.Application }
     */
    app = null

    /**
     * @param { Express.Application } app
     */
    constructor(app) {
        this.app = app
        this.loadroutes()
    }

    loadroutes() {
        const foldersModules = fs.readdirSync(`${this.BASE_PATH}`)

        for (const folder of foldersModules) {
            if (!fs.existsSync(`${this.BASE_PATH}/${folder}/router.js`)) {
                continue
            }
            const file = `../.${this.BASE_PATH}/${folder}/router`
            const router = require(file)
            this.app.use(`/${folder}`, router.router)
            console.log(`✅ Loaded ${folder} router`)
        }

    }
}

module.exports = RouterLoader