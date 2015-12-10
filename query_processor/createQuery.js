
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.3
 */

const types = ['DATABASE', 'TABLE']


const processTableQuery = (key, type, name, query) => {
  const openp = query.indexOf('(')
  const closep = query.indexOf(')')

  if ( openp === -1 || closep === -1 )
    return { error: true, errorMessage: 'CREATE command is missing a parenthesis' }
  if (closep < openp)
    return { error: true, errorMessage: 'CREATE command has parentheses out of order' }

  let columns = query.substring(openp + 1, closep).split(',')
  columns = columns.filter(c => c.length)

  if (!columns.length)
    return { error: true, errorMessage: 'CREATE command requires column names' }

  columns = columns.map(c => c.trim())

  return {
    component: key,
    type: type,
    name: name,
    columns: columns
  }
}

const process = (query, key) => {
  const qs = query.split(' ')

  if (key !== 'CREATE')
    return { error: true, errorMessage: `[ERROR] invalid key for CREATE query: ${key}` }

  if (qs.length < 3)
    return { error: true, errorMessage: 'CREATE command requires 2 arguments' }

  if (qs[0].toUpperCase() !== 'CREATE')
    return { error: true, errorMessage: `[ERROR] invalid query for CREATE: ${qs[0]}` }

  const type = qs[1].toUpperCase()
  const name = qs[2]

  if ( !types.includes(type) )
    return { error: true, errorMessage: `Invalid type '${type}' for the CREATE command` }

  if (type === 'DATABASE')
    return { component: key, type: type, name: name }

  if (type === 'TABLE')
    return processTableQuery(key, type, name, query)
}

exports.process = process