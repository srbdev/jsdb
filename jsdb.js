
/* jshint esnext: true, asi: true */

exports.createDatabase = (name) => console.log(`Create database ${name}`)
exports.createTable = (name) => console.log(`Create table ${name}`)
exports.useDatabase = (name) => console.log(`Use database ${name}`)
exports.saveDatabase = (url) => console.log(`Save database in ${url}`)
exports.loadDatabase = (url) => console.log(`Load database from ${url}`)
