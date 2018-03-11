const prompt = require('prompt')

const api = require('../util/api')
const logger = require('../util/logger')

module.exports = callback => {
    prompt.start()

    prompt.message = ""
    prompt.delimiter = ""

    prompt.get([{
        name: 'username',
        required: true,
        description: 'Your username : ',
        type: 'string'
    }, {
        name: 'email',
        required: true,
        description: 'Your email : ',
        type: 'string'
    }, {
        name: 'password',
        required: true,
        hidden: true,
        description: 'Your password : ',
    }], function (err, result) {

        api.register(result)
            .then(response => {
                logger.log(response.data.message)
                callback()
            })
            .catch(failure => {
                logger.log(failure.data.message)
                callback()
            })
    })
}