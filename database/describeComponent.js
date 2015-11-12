
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const moment = require('moment')

const describeDatabase = (ram, name) => {
  const db = ram.databases[name]

  if ( !db )
    return `Database ${name} does not exist`

  let output = ''
  output += `\nDatabase: ${db.name}`
  output += `\nCreated: ${moment(db._createdAt).format('LLL')}`
  output += `\nPath: ${db._path}`
  output += `\nModified: ${db._modified}`

  output += '\n\n'

  const ts = Object.keys(db.tables)

  if ( !ts.length )
    output += 'No tables\n'
  else {
    output += 'Tables:\n-------\n'
    ts.forEach(t => output += `${t}\n`)
  }

  return output
}

const describeTable = (ram, name) => {
  const db = ram.currentDatabase

  if ( !db )
    return 'No database selected'

  const table = db.tables[name]

  if ( !table )
    return `Table ${name} does not exist for database ${db.name}`

  let output = ''
  output += `\nTable: ${table.name}`
  output += `\nCreated: ${moment(table._createdAt).format('LLL')}`
  output += '\n\n'
  output += 'Columns:\n--------\n'
  table.columns.forEach(c => output += `${c.trim()}\n`)
  output += `\nNumber of rows: ${table.data.length}\n`

  return output
}

const run = (ram, query) => {
  if (query.type === 'DATABASE')
    return describeDatabase(ram, query.name)
  else if (query.type === 'TABLE')
    return describeTable(ram, query.name)
  else
    return `DESCRIBE command does not support type ${query.type}`
}

exports.run = run