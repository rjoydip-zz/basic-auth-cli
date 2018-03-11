const figlet = require('figlet')

const logger = require('../../cli/util/logger')

module.exports = vorpal => {
    vorpal
        .command('clear', 'Clear terminal')
        .action((args, callback) => {
            logger.clear()
            callback()
        })
}