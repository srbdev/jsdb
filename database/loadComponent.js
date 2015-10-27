
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
  const path = query.path
  const ps = path.split('/')
  const filename = ps[ps.length - 1]
  const fns = filename.split('.')
  const name = fns[0]
  const extension = fns[fns.length - 1]

  if (extension !== 'jsdb')
    return 'LOAD command requires a file with a .jsdb extension'

  /** TODO add a check mechanism to ensure that the db being imported is valid */

  ram.databases[name] = BSON.deserialize(fs.readFileSync(path))

  return `Database ${name} loaded!`
}

exports.run = run