
/* jshint esnext: true, asi: true */

const database = (name, timestamp) => {
  return {
    name: name,
    tables: {},
    /** private */
    _createdAt: timestamp,
    _modified: true,
    _path: null
  }
}

exports.database = database