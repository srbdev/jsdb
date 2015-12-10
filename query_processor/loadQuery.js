
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.2
 */

const process = (query, key) => {
  const qs = query.split(' ')

  if (key !== 'LOAD')
    return { error: true, errorMessage: `[ERROR] invalid key for LOAD query: ${key}` }

  if (qs.length < 2)
    return { error: true, errorMessage: 'LOAD command requires 1 argument' }

  if (qs[0].toUpperCase() !== 'LOAD')
    return { error: true, errorMessage: `[ERROR] invalid query for LOAD: ${qs[0]}` }

  return {
    component: key,
    path: qs[1]
  }
}

exports.process = process