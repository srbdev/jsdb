
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const types = ['DATABASE', 'TABLE']

const process = (query, key) => {
  const qs = query.split(' ')

  if (qs.length < 3)
    return { error: true, errorMessage: 'CREATE command requires 2 arguments' }

  const type = qs[1].toUpperCase()
  const name = qs[2]

  if ( !types.includes(type) )
    return { error: true, errorMessage: `Invalid type '${type}' for the CREATE command` }

  return {
    component: key,
    type: type,
    name: name
  }
}

exports.process = process