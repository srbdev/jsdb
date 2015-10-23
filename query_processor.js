
/* jshint esnext: true, asi: true */

exports.process = query => {
  const qs = query.split(' ');

  if (qs[0].toLowerCase() === 'load')
    return { command: 'load', path: qs[1] }
  else if (qs[0].toLowerCase() === 'show')
    return { command: 'show', type: qs[1] }
  else if (qs[0].toLowerCase() === 'create')
    return { command: 'create', name: qs[1] }
  else
    return { error: 'Unknown command' }
}