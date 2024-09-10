const { Router: router } = require('express')

class Router {
    
    constructor(serviceclass = undefined) {
        this.router = router()
        if (!serviceclass) 
            return this
        this.serviceclass = new serviceclass()
        this.boot()
    }

    getHandlers() {
        const handlers = []
        for (const key in this.serviceclass) {
            if (typeof this.serviceclass[key] === 'object' ) {
                handlers.push(key)
            }
        }
        return handlers
    }

    /**
     * @param {string[]} handlers
     */
    setRoutes(handlers) {
        for (const handler of handlers) {
            const route = this.serviceclass[handler]
            if (route.method === 'get') {
                this.router.get(route.path, route.callback)
            }
            if (route.method === 'post') {
                this.router.post(route.path, route.callback)
            }
            if (route.method === 'put') {
                this.router.put(route.path, route.callback)
            }
            if (route.method === 'delete') {
                this.router.delete(route.path, route.callback)
            }
        }
    }

    boot() {
        this.setRoutes(this.getHandlers())
        return this.router
    }
}

module.exports = Router