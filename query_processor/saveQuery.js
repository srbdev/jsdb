
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const process = (query, key) => {
  const qs = query.split(' ')

  if (qs.length < 2)
    return { error: true, errorMessage: 'SAVE command requires 1 arguments' }

  const name = qs[1]

  return {
    component: key,
    name: name
  }
}

exports.process = process