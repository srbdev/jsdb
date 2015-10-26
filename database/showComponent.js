
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const showDatabases = (databases) => {
  let str = ''

  for (let d in databases)
    str += `${d}\n`

  return str.length ? '\nDatabases:\n----------\n' + str : 'There are no databases'
}

const showTables = (currentDatabase) => {
  if ( !Object.keys(currentDatabase).length )
    return 'No database selected'

  const ks = Object.keys(currentDatabase.tables)

  if ( !ks.length )
    return `There are no tables for database ${currentDatabase.name}`

  let str = '';
  ks.each(k => str += `${k}\n`)

  return '\nTables:\n-------\n' + str
}

const run = (databases, currentDatabase, query) => {
  return query.type === 'DATABASES' ? showDatabases(databases) : showTables(currentDatabase)
}

exports.run = run