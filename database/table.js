
/* jshint esnext: true, asi: true */

const table = (name, columns, timestamp) => {
  let cs = ['_id']
  columns.forEach(c => cs.push(c))

  return {
    name: name,
    columns: cs,
    data: [],
    /** private */
    _createdAt: timestamp,
    _incrementalId: 0
  }
}

exports.table = table