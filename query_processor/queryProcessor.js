
/* jshint esnext: true, asi: true */

/**
 * queryProcessor.js's sole existence is to take in a query from dbms.js and
 * return a packet which the database engine can process.
 *
 * @author srbdev
 * @version 0.0.1
 */

exports.process = query => {
  const qs = query.split(' ');

  if (qs[0].toLowerCase() === 'load')         return { command: 'load', path: qs[1] }
  else if (qs[0].toLowerCase() === 'show')    return { command: 'show', type: qs[1] }
  else if (qs[0].toLowerCase() === 'create')  return { command: 'create', name: qs[1] }
  else if (qs[0].toLowerCase() === 'use')     return { command: 'use', name: qs[1] }
  else                                        return { error: 'Unknown command' }
}