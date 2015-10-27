
/* jshint esnext: true, asi: true */

/**
 *
 * @author srbdev
 * @version  0.0.1
 */

const fs = require('fs')
const bson = require('bson')
const BSON = new bson.BSONPure.BSON()

const run = (ram, query) => {
  const name = query.name
  const db = ram.databases[name]

  if ( !db )
    return `Error trying to save a non-existent database: ${name}`

  const path = `${process.env.HOME}/${name}.jsdb`
  db._path = path
  db._modified = false

  fs.writeFileSync(db._path, BSON.serialize(db, false, true, false))
  return `Database ${name} was successfully saved in ${path}`
}

exports.run = run