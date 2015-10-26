
/* jshint esnext: true, asi: true */

/**
 * dbms.js acts as the middleman between JSDB's public interfaces, the query
 * processor, and the database engine. Any third-party should only interface
 * through dbms.js in order to work with JSDB.
 *
 * @author srbdev
 * @version 0.0.2
 */

const qp = require('./query_processor/queryProcessor.js')
const engine = require('./database/databaseEngine.js')

const safeguard = () => {
  /** TODO implement safeguard mechanism... */
}

const query = q => {
  const processedQuery = qp.process(q)

  if (processedQuery === undefined)
    return 'Unknown command'
  else if (processedQuery.error)
    return processedQuery.errorMessage
  else
    return engine.run(processedQuery)
}

exports.query = query
exports.safeguard = safeguard