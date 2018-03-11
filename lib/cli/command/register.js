const logger = require('../util/logger.js')

module.exports = vorpal => {
  vorpal
    .command('register', 'Register your account')
    .alias('r')
    .action((args, callback) => {
      require('../prompt/register')(callback)
    })
}