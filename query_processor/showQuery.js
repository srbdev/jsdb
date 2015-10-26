
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const types = ['DATABASES', 'TABLES']

const process = (query, key) => {
  const qs = query.split(' ')

  if (qs.length < 2)
    return { error: true, errorMessage: 'SHOW command requires 1 argument' }

  const type = qs[1].toUpperCase()

  if ( !types.includes(type) )
    return { error: true, errorMessage: `Invalid type '${type}' for the SHOW command` }

  return {
    component: key,
    type: type
  }
}

exports.process = process