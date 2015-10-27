
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
  return query.type === 'DATABASE' ? createDatabase(ram, query.name) : createTable(ram, query.name)
}

exports.run = run