const low = require('lowdb')
const shortid = require('shortid')
const FileSync = require('lowdb/adapters/FileSync')
const CryptoJS = require("crypto-js")

const pkg = require('./../../../package.json')

class Api {
    constructor() {
        this.db = low(new FileSync('db.json'))
        // Set some defaults (required if your JSON file is empty)
        this.db.defaults({ users: [] })
            .write()
    }

    async register(data) {
        return await this.db
            .get('users')
            .push(Object.assign(data, { id: shortid.generate() }))
            .write()
    }

    async login(data) {

        return await this.db
            .get('users')
            .find({ email: data.email, password: data.password })
            .value()
    }
}

module.exports = new Api;