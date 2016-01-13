/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const run = (ram, query) => {
  const name = query.table

  if (ram.currentDatabase === null)
    return 'No database selected'

  if (ram.currentDatabase.tables[name]) {
    const table = ram.currentDatabase.tables[name]
    let str = '\n'

    table.data.map(row => {
      table.columns.forEach(c => {
        str += row[c] + '\t'
      })

      str += '\n'
    })

    str += `\nNumber of rows: ${table.data.length}\n`

    return str
  } else {
    return `Table ${name} does not exist for database ${ram.currentDatabase.name}`
  }

  return 'Engine component not yet implemented'
}

exports.run = run
