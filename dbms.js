
/* jshint esnext: true, asi: true */

/**
 * dbms.js acts as the middleman between JSDB's public interfaces, the query
 * processor, and the database engine. Any third-party should only interface
 * through dbms.js in order to work with JSDB.
 *
 * @author srbdev
 * @version 0.0.1
 */

const qp = require('./query_processor/queryProcessor.js')
const engine = require('./database/databaseEngine.js')

let currentDb = null;

const safeguard = () => {
  /** TODO implement safeguard mechanism... */
  console.log('safeguarding...')

  if (currentDb && currentDb._modified)
    engine.save(currentDb.name)
}

const run = qobj => {
  if (qobj.error)
    return qobj.error
  else if (qobj.command === 'load')
    return engine.load(qobj.path)
  else if (qobj.command === 'show')
    return engine.showDatabases()
  else if (qobj.command === 'create')
    return engine.createDatabase(qobj.name)
  else if (qobj.command === 'use') {
    currentDb = engine.useDatabase(qobj.name)
    return currentDb ? `Database ${qobj.name} selected` : `No database with name ${qobj.name}`
  } else {
    console.log('jsdb misbehaved')
    safeguard()
    process.exit(0)
  }
}

exports.input = query => {
  return run( qp.process(query) )
}

exports.safeguard = safeguard