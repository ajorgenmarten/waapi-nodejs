const express = require('express')

class Parser {
    constructor(app) {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
    }
}

module.exports = Parser