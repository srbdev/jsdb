/* jshint esnext: true, asi: true */

const readline = require('readline')
const dbms = require('./dbms.js')

const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt('jsdb> ')
rl.prompt()

const quit = () => {
  dbms.safeguard()
  console.log('exit')
  process.exit(0)
}

rl.on('line', line => {
  line = line.trim()

  if (line === 'exit' || line === 'quit') {
    quit()
  } else if (line.length)
    console.log(dbms.input(line))

  rl.prompt()
}).on('close', quit)

