
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.2
 */

const process = (query, key) => {
  const qs = query.split(' ')

  if (key !== 'SAVE')
    return { error: true, errorMessage: `[ERROR] invalid key for SAVE query: ${key}` }

  if (qs.length < 2)
    return { error: true, errorMessage: 'SAVE command requires 1 argument' }

  if (qs[0].toUpperCase() !== 'SAVE')
    return { error: true, errorMessage: `[ERROR] invalid query for SAVE: ${qs[0]}` }

  const name = qs[1]

  return {
    component: key,
    name: name
  }
}

exports.process = process