
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const run = (databases, currentDatabase, query) => {
  currentDatabase = databases[query.name]

  if ( !currentDatabase ) {
    currentDatabase = {}
    return `No database with name ${query.name}`
  }

  return `Database changed to ${query.name}`
}

exports.run = run