/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (x) => {
  let returnArray = [];
  if (x === undefined)
    return undefined;
  if (typeof x === 'function')
    return undefined;
  if (x === null)
    return 'null';
  if (typeof x === 'string')
    return `"${x}"`;
  if (x instanceof Date)
    return stringifyJSON(x.toJSON());
  if (typeof x === 'object' && x.constructor === Object) {
    for (let key in x) {
      let keyStr = stringifyJSON(key);
      let valStr = stringifyJSON(x[key]);
      if (keyStr && valStr) {
        returnArray.push(`${keyStr}:${valStr}`)
      }
    }
    return `{${returnArray.join(',')}}`;
  } else if (Array.isArray(x)) {
    if (x.length === 0)
      return '[]';
    else {
      x.forEach((item) => {
        returnArray.push(stringifyJSON(item));
      });
      return `[${returnArray}]`;
    }
  } else {
    return x.toString();
  }
};