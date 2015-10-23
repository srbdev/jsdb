
/* jshint esnext: true, asi: true */

const qp = require('./query_processor.js')
const engine = require('./database/database_engine.js')

let current_db = null;

const safeguard = () => {
  /** TODO implement safeguard mechanism... */
  console.log('safeguarding...?')
}

const run = qobj => {
  if (qobj.error)
    return qobj.error
  else if (qobj.command === 'load')
    return engine.load(qobj.path)
  else if (qobj.command === 'show')
    return engine.show_databases()
  else if (qobj.command === 'create')
    return engine.create(qobj.name)
  else {
    console.log('jsdb misbehaved')
    safeguard()
    process.exit(0)
  }
}

exports.input = query => {
  return run( qp.process(query) )
}

exports.safeguard = safeguard