
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.2
 */

const process = (query, key) => {
  const qs = query.split(' ')

  if (key !== 'USE')
    return { error: true, errorMessage: `[ERROR] invalid key for USE query: ${key}` }

  if (qs.length < 2)
    return { error: true, errorMessage: 'USE command requires 1 argument' }

  if (qs[0].toUpperCase() !== 'USE')
    return { error: true, errorMessage: `[ERROR] invalid query for USE: ${qs[0]}` }

  return {
    component: key,
    name: qs[1]
  }
}

exports.process = process