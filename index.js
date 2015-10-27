
/* jshint esnext: true, asi: true */

/**
 * index.js is the entry point for the JSDB command line interface. The allows
 * the user to interact with JSDB and a database directly.
 *
 * Currently, JSDB can only be access via its command line interface.
 *
 * @author srbdev
 * @version 0.0.1
 */

const readline = require('readline')
const dbms = require('./dbms.js')

const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt('jsdb> ')
rl.prompt()

const quit = () => {
  console.log('Bye')
  process.exit(0)
}

rl.on('line', line => {
  line = line.trim()

  if (line === 'exit' || line === 'quit' || line === 'bye')
    quit()
  else if (line.length)
    console.log( dbms.query(line) )

  rl.prompt()
}).on('close', quit)

