require('dotenv/config')
const joi = require('joi')
const process = require('process')

/**
 * @typedef {Object} Env
 * @property {number} PORT
 * @property {string} API_TOKEN
 * @property {string} INSTANCE_ID
 */

const envSchema = joi.object({
    PORT: joi.number().default(3000),
    API_TOKEN: joi.string().required(),
    INSTANCE_ID: joi.string().required(),
}).unknown(true)

const { error, value } = envSchema.validate(process.env)

if (error) {
    console.log(`❌ Invalid environment variables: ${error.message}`)
    process.exit(1)
}

/**
 * @type {Env}
 */
const env = value

module.exports = env

