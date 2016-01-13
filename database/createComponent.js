/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const db = require('./database.js')
const t  = require('./table.js')

const createDatabase = (ram, name) => {
  if (ram.databases[name])
    return `Database ${name} already exists`

  ram.databases[name] = db.database(name, Date.now())
  return `Database ${name} successfully created!`
}

const createTable = (ram, query) => {
  const name = query.name

  if (ram.currentDatabase === null)
    return 'No database selected'

  if (ram.currentDatabase.tables[name])
    return `Table ${name} already exists for database ${ram.currentDatabase.name}`

  ram.currentDatabase.tables[name] = t.table(name, query.columns, Date.now())

  return `Table ${name} successfully created for database ${ram.currentDatabase.name}`
}

const run = (ram, query) => {
  if (query.type === 'DATABASE')
    return createDatabase(ram, query.name)
  else if (query.type === 'TABLE')
    return createTable(ram, query)
  else
    return `CREATE command does not support type ${query.type}`
}

exports.run = run