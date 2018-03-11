const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')

const pkg = require('../package.json')
const logger = require('../lib/cli/util/logger')

const service = require('./cli/util/service')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  if (data.email && data.password) {
    service.register(data)
      .then(value => {
        res.status(200).send({
          value,
          message: chalk.bold.green('User Registerd Successfully')
        })
      })
      .catch(err => {
        res.status(500).send({
          err,
          message: chalk.bold.red('Faild')
        })
      })
  } else {
    res.status(500).send({
      message: chalk.bold.red('Email or Password field is missing')
    })
  }
})

app.post('/login', (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password
  }

  if (data.email && data.password) {
    service.login(data)
      .then(value => {
        if(value === undefined) {
          res.status(200).send({
            value,
            message: chalk.bold.red('User not found')
          })
        } else {
          res.status(200).send({
            value,
            message: chalk.bold.green('User logged Successfully')
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          err,
          message: chalk.bold.red('Faild')
        })
      })
  } else {
    res.status(500).send({
      message: chalk.bold.red('Email or Password field is missing')
    })
  }
})

app.listen(pkg.config.port, () => {
  logger.log(chalk.bold.green(`Server is running on port ${pkg.config.port}`))
})