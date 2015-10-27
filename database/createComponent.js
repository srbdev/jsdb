
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const db = require('./database.js')

const createDatabase = (ram, name) => {
  if (ram.databases[name])
    return `Database ${name} already exists`

  ram.databases[name] = db.database(name, Date.now())
  return `Database ${name} successfully created!`
}

const createTable = (ram, name) => {
  return 'CREATE TABLE engine component not yet implemented'
}

const run = (ram, query) => {
  if (query.type === 'DATABASE')
    return createDatabase(ram, query.name)
  else if (query.type === 'TABLE')
    return createTable(ram, query.name)
  else
    return `CREATE command does not support type ${query.type}`
}

exports.run = run