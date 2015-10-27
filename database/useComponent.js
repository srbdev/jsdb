
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const run = (ram, query) => {
  const currDb = ram.databases[query.name]

  if ( !currDb ) {
    return `No database with name ${query.name}`
  }

  ram.currentDatabase = currDb
  return `Database changed to ${currDb.name}`
}

exports.run = run