
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const db = require('./database.js')

const createDatabase = (databases, name) => {
  if (databases[name])
    return `Database ${name} already exists`

  databases[name] = db.database(name, Date.now())
  return `Database ${name} successfully created!`
}

const createTable = (databases, name) => {
  return 'CREATE TABLE engine component not yet implemented'
}

const run = (databases, currentDatabase, query) => {
  return query.type === 'DATABASE' ? createDatabase(databases, query.name) : createTable(databases, query.name)
}

exports.run = run