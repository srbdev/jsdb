
/* jshint esnext: true, asi: true */

/**
 * queryProcessor.js's sole existence is to take in a query from dbms.js and
 * return a packet which the database engine can process.
 *
 * @author srbdev
 * @version 0.0.2
 */

const createQuery   = require('./createQuery.js')
const deleteQuery   = require('./deleteQuery.js')
const describeQuery = require('./describeQuery.js')
const dropQuery     = require('./dropQuery.js')
const importQuery   = require('./importQuery.js')
const insertQuery   = require('./insertQuery.js')
const loadQuery     = require('./loadQuery.js')
const saveQuery     = require('./saveQuery.js')
const selectQuery   = require('./selectQuery.js')
const showQuery     = require('./showQuery.js')
const useQuery      = require('./useQuery.js')

const queryMap = {
  'CREATE':   createQuery,
  'DELETE':   deleteQuery,
  'DESCRIBE': describeQuery,
  'DROP':     dropQuery,
  'IMPORT':   importQuery,
  'INSERT':   insertQuery,
  'LOAD':     loadQuery,
  'SAVE':     saveQuery,
  'SELECT':   selectQuery,
  'SHOW':     showQuery,
  'USE':      useQuery
}

const process = query => {
  const qs = query.split(' ');
  const key = qs[0].toUpperCase()

  return queryMap.hasOwnProperty(key) ? queryMap[key].process(query, key) : void 0
}

exports.process = process