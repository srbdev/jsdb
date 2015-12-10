
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.2
 */

const types = ['DATABASE', 'TABLE']

const process = (query, key) => {
  const qs = query.split(' ')

  if (key !== 'DESCRIBE')
    return { error: true, errorMessage: `[ERROR] invalid key for DESCRIBE query: ${key}` }

  if (qs.length < 3)
    return { error: true, errorMessage: 'DESCRIBE command requires 2 arguments' }

  if (qs[0].toUpperCase() !== 'DESCRIBE')
    return { error: true, errorMessage: `[ERROR] invalid query for DESCRIBE: ${qs[0]}` }

  const type = qs[1].toUpperCase()
  const name = qs[2]

  if ( !types.includes(type) )
    return { error: true, errorMessage: `Invalid type '${type}' for the DESCRIBE command` }

  return {
    component: key,
    type: type,
    name: name
  }
}

exports.process = process