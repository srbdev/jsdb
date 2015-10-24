
/* jshint esnext: true, asi: true */

/**
 * databaseEngine.js is the core of JSDB. It manages everything that is related
 * to data handling: loading, saving, fetching, optimizing, etc... The database
 * engine is where all the fun stuff will happen.
 *
 * @author srbdev
 * @version 0.0.1
 */

const fs = require('fs')
const bson = require('bson')
const BSON = new bson.BSONPure.BSON()

const db = require('./database.js')

let databases = {}

exports.load = path => {
  if (!path)
    return 'LOAD command requires a file path'

  const ps = path.split('/')
  const filename = ps[ps.length - 1]
  const fns = filename.split('.')
  const name = fns[0]
  const extension = fns[fns.length - 1]

  if (extension !== 'jsdb')
    return 'LOAD command requires a file with a .jsdb extension'

  databases[name] = BSON.deserialize(fs.readFileSync(path))

  return `Database ${name} loaded!`
}

exports.showDatabases = () => {
  let str = ''

  for (let k in databases)
    str += `${k}\n`

  return str.length ? '\nDatabases:\n----------\n' + str : 'There are no databases loaded'
}

exports.createDatabase = name => {
  if (databases[name])
    return `Database ${name} already exists`

  databases[name] = db.database(name, Date.now())
  return `Database ${name} successfully created!`
}

exports.useDatabase = name => databases[name]

exports.save = name => {
  const d = databases[name]

  if (!d)
    console.log(`Error trying to save a non-existent database: ${name}`)

  const path = `${process.env.HOME}/${name}.jsdb`
  d._path = path
  d._modified = false

  fs.writeFileSync(d._path, BSON.serialize(d, false, true, false))
  console.log(`Database ${d.name} was successfully saved in ${d._path}`)
}