
/* jshint esnext: true, asi: true */

exports.database = (name, timestamp) => {
  return {
    name: name,
    tables: {},
    /** private */
    _created_at: timestamp,
    _modified: true,
    _path: null
  }
}