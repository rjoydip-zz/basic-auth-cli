const crypto = require('crypto');

const pkg = require('../../../package.json');

class Crypto {
    constructor() { }

    getHash() {
        return crypto.createHmac('sha256', pkg.name)
        .update(pkg.description)
        .digest('hex');;
    }
}

module.exports = new Crypto;