
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.2
 */

const types = ['DATABASE', 'TABLE']


const processTableQuery = (key, type, name, query) => {
  const openp = query.indexOf('(')
  const closep = query.indexOf(')')

  if ( openp === -1 || closep === -1 )
    return { error: true, errorMessage: 'CREATE command is missing a parenthesis' }
  if (closep < openp)
    return { error: true, errorMessage: 'CREATE command has parentheses out of order' }

  const columns = query.substring(openp + 1, closep).split(',')

  return {
    component: key,
    type: type,
    name: name,
    columns: columns
  }
}

const process = (query, key) => {
  const qs = query.split(' ')

  if (qs.length < 3)
    return { error: true, errorMessage: 'CREATE command requires 2 arguments' }

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