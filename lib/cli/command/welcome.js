const figlet = require('figlet')

const pkg = require('../../../package.json')
const logger = require('../../cli/util/logger')

module.exports = vorpal => {
    logger.log(
        figlet.textSync(`${pkg.title}`, {
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    )
    logger.log(`Welcome to ${pkg.title}!`)
}