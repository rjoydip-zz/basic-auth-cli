let logger = {
  debug:(message) => { console.debug(message) },
  log: (message) =>{ console.log(message) },
  confirm: (message) => { console.confirm(message) },
  warn: (message) => { console.warn(message) },
  error: (message) => { console.error(message) },
  clear: (message) => { console.log('\033[2J') }
}

module.exports = logger