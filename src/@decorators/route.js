/** @typedef {import('express').RequestHandler} RequestHandler */

/**
 * 
 * @param {string} path
 * @param {RequestHandler} callback 
 * @returns 
 */
function Get(path, callback) {
    return {
        method: 'get',
        path: path,
        callback: callback
    }
}

/**
 * 
 * @param {string} path
 * @param {RequestHandler} callback 
 * @returns 
 */
function Post(path, callback) {
    return {
        method: 'post',
        path: path,
        callback: callback
    }
}
/**
 * 
 * @param {string} path
 * @param {RequestHandler} callback 
 * @returns 
 */
function Put(path, callback) {
    return {
        method: 'put',
        path: path,
        callback: callback
    }
}
/**
 * 
 * @param {string} path
 * @param {RequestHandler} callback 
 * @returns 
 */
function Delete(path, callback) {
    return {
        method: 'delete',
        path: path,
        callback: callback
    }
}
module.exports = {
    Get,
    Post,
    Put,
    Delete
}