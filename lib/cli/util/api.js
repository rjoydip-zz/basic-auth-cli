const axios = require('axios')

const pkg = require('./../../../package.json')

class Api {
    constructor() {
        this.BASE_URL = `http://localhost:${pkg.config.port}`
    }

    async register(data) {
        return await axios.post(`${this.BASE_URL}/register`, data)
    }

    async login(data) {
        return await axios.post(`${this.BASE_URL}/login`, data)
    }
}

module.exports = new Api;