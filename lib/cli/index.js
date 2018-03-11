const vorpal = require('vorpal')();
const chalk = require('chalk');

const pkg = require('../../package.json');

module.exports = function (vorpal) {
  vorpal
    .use(require('./command/welcome.js'))
    .use(require('./command/register'))
    .use(require('./command/login'))
    .use(require('./command/start'))
    .use(require('./command/clear'))
    .delimiter(
      chalk.cyan(`${pkg.delimiter}~$`)
    )
    .show();
}
