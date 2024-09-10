class Morgan {
    constructor(app) {
        this.app = app;
        this.app.use(require('morgan')('dev'));
    }
}

module.exports = Morgan;