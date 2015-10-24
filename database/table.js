
/* jshint esnext: true, asi: true */

exports.table = (name, timestamp) => {
  return {
    name: name,
    columns: [],
    data: [],
    /** private */
    _createdAt: timestamp,
    _incrementalId: 0
  }
}