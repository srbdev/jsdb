/**
 *
 * @author srbdev
 * @version 0.0.1
 */

const error = (msg) => {
  return { error: true, errorMessage: msg }
}

const syntaxError = () => {
  return { error: true, errorMessage: '[ERROR] syntax error'}
}

exports.error = error
exports.syntaxError = syntaxError