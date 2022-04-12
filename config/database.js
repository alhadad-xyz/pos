const mongoose = require('mongoose')
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('./config')
// const url = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
const url = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}`
mongoose.connect(url)
const db = mongoose.connection

if (db) {
	console.log('OKAY')
} else {
	console.log('ERROR')
}

module.exports = db