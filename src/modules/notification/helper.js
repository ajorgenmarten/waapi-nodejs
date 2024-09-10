const env = require('../../@libs/env')

const sendWatsapp = async (message, chatId) => {

    try {
        const url = `https://waapi.app/api/v1/instances/${env.INSTANCE_ID}/client/action/send-message`;
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${env.API_TOKEN}`
          },
          body: JSON.stringify({chatId, message})
        };
        
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
        return false
    }

}

module.exports = {
    sendWatsapp
}