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
    let bads = []
    query.columns.forEach(c => {
      if (ram.currentDatabase.tables[name].columns.indexOf(c) === -1)
        bads.push(c)
    })

    if (bads.length)
      return `Column(s) ${bads.join(',')} do not exist for table ${name}`

    let datum = {}
    datum._id = ram.currentDatabase.tables[name]._incrementalId++

    for (let i = 0; i < query.columns.length; i++) {
      datum[query.columns[i]] = query.values[i]
    }

    ram.currentDatabase.tables[name].data.push(datum)

    return `Record added with ID ${datum._id}`
  } else {
    return `Table ${name} does not exist for database ${ram.currentDatabase.name}`
  }
}

exports.run = run
