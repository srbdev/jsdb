
/* jshint esnext: true, asi: true */

const table = (name, timestamp) => {
  return {
    name: name,
    columns: [],
    data: [],
    /** private */
    _createdAt: timestamp,
    _incrementalId: 0
  }
}

exports.table = table