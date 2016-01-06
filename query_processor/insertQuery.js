/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const helper = require('./_helper.js')

const process = (query, key) => {
  const qs = query.split(' ')
  let qarr = query.split('')

  if (key != 'INSERT')
    return helper.error(`[ERROR] invalid key for INSERT query: ${key}`)

  if (qs[0].toUpperCase() !== 'INSERT')
    return helper.error(`[ERROR] invalid query for INSERT: ${qs[0]}`)

  if (qs[1].toUpperCase() !== 'INTO')
    return helper.error(`[ERROR] invalid syntax: ${qs[1]}`)

  let table = ''
  if (qs[2].length)
    table = qs[2]

  let i = qarr.indexOf('(')
  if (i === -1)
    return helper.syntaxError()

  qarr.splice(0, i+1)

  i = qarr.indexOf(')')
  if (i === -1)
    return helper.syntaxError()

  const columns = qarr.splice(0, i).join('').split(',')

  i = qarr.indexOf('(')
  if (i === -1)
    return helper.syntaxError()

  qarr.splice(0, i+1)

  i = qarr.indexOf(')')
  if (i === -1)
    return helper.syntaxError()

  const values = qarr.splice(0, i).join('').split(',')

  if (columns.length !== values.length)
    return helper.error('[ERROR] columns length does not match values length')

  return {
    component: key,
    table: table,
    columns: columns,
    values: values
  }
}

exports.process = process
