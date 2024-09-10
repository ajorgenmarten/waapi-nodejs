const { Get, Post } = require("../../@decorators/route")

class NotificationService {

    hello = Get('/', (req, res) => {
        res.json({ message: 'hello' })
    })

    sendWatsapp = Post('/sendsms', async (req, res) => {
        const { message, chatId } = req.body
        const { sendWatsapp } = require('../../modules/notification/helper')
        const result = await sendWatsapp(message, chatId)
        res.json(result)
    })

}

module.exports = NotificationService