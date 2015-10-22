/* jshint esnext: true, asi: true */

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

  /** TODO actually load the database... */
  databases[name] = {}

  return `Database ${name} loaded!`
}

exports.show_databases = () => {
  let str = ''

  for (let k in databases)
    str += `${k}\n`

  return str.length ? '\nDatabases:\n----------\n' + str : 'There are no databases loaded'
}

exports.create = name => {
  if (databases[name])
    return `Database ${name} already exists`

  databases[name] = db.database(name, Date.now())
  return `Database ${name} successfully created!`
}
