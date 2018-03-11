const logger = require('../util/logger.js')

module.exports = vorpal => {
    vorpal
        .command('login', 'Login into application')
        .alias('l')
        .action((args, callback) => {
            require('../prompt/login')(callback)
        })
}