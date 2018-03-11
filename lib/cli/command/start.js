const logger = require('../util/logger.js')

module.exports = vorpal => {
    vorpal
        .command('start', 'Start the server')
        .alias('s')
        .action((args, callback) => {
            require('../../server')
            callback()
        })
}