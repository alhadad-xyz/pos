const mongoose = require('mongoose')
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('./config')
// const url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
const url = `mongodb://${dbHost}:${dbPort}/${dbName}`
mongoose.connect(url)
const db = mongoose.connection

module.exports = db