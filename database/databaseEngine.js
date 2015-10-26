
/* jshint esnext: true, asi: true */

/**
 * databaseEngine.js is the core of JSDB. It manages everything that is related
 * to data handling: loading, saving, fetching, optimizing, etc... The database
 * engine is where all the fun stuff will happen.
 *
 * @author srbdev
 * @version 0.0.2
 */

const createComponent   = require('./createComponent.js')
const deleteComponent   = require('./deleteComponent.js')
const describeComponent = require('./describeComponent.js')
const dropComponent     = require('./dropComponent.js')
const importComponent   = require('./importComponent.js')
const insertComponent   = require('./insertComponent.js')
const loadComponent     = require('./loadComponent.js')
const saveComponent     = require('./saveComponent.js')
const selectComponent   = require('./selectComponent.js')
const showComponent     = require('./showComponent.js')
const useComponent      = require('./useComponent.js')

const componentMap = {
  'CREATE':   createComponent,
  'DELETE':   deleteComponent,
  'DESCRIBE': describeComponent,
  'DROP':     dropComponent,
  'IMPORT':   importComponent,
  'INSERT':   insertComponent,
  'LOAD':     loadComponent,
  'SAVE':     saveComponent,
  'SELECT':   selectComponent,
  'SHOW':     showComponent,
  'USE':      useComponent
}


let databases = {}
let currentDatabase = {}

const run = processedQuery => {
  if (componentMap.hasOwnProperty(processedQuery.component))
    return componentMap[processedQuery.component].run(databases, currentDatabase, processedQuery)
  else
    return `The following query ${JSON.stringify(processedQuery)} cannot be processed`
}

exports.run = run