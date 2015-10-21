const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

rl.setPrompt('jsdb> ')
rl.prompt()

rl.on('line', line => {
  line = line.trim()

  if (line.length)
    console.log(line)

  rl.prompt()
}).on('close', () => {
  console.log('\nexit');
  process.exit(0)
})
