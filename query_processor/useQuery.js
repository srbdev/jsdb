
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const process = (query, key) => {
  const qs = query.split(' ')

  if (qs.length < 2)
    return { error: true, errorMessage: 'USE command requires 1 argument' }

  return {
    component: key,
    name: qs[1]
  }
}

exports.process = process