const database = require('./database/database.js')
const create = require('./database/createComponent.js')

let ram = {
  databases: {},
  currentDatabase: null
}

exports.create = (name) => {
  create.run(ram, { type: 'DATABASE', name: name })
  return ram.databases[name]
}

exports.createTable = (name) => console.log(`Create table ${name}`)
exports.useDatabase = (name) => console.log(`Use database ${name}`)
exports.saveDatabase = (url) => console.log(`Save database in ${url}`)
exports.loadDatabase = (url) => console.log(`Load database from ${url}`)

exports.ram = () => ram