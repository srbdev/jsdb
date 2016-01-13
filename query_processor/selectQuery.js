/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const helper = require('./_helper.js')

const process = (query, key) => {
  const qs = query.split(' ')

  const table = qs[3]

  return {
    component: key,
    table: table
  }
}

exports.process = process