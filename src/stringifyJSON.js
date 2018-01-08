// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return null;
  }
  let type = typeof(obj);
  if (type === 'string') {
    return '\"' + obj + '\"';
  }
  if (type === 'number') {
    return obj.toString();
  }
  if (type === 'boolean') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    var str = '[';
    for (let i = 0; i < obj.length; i++) {
      str += stringifyJSON(obj[i])
      str += ',';
    }
    if (str[str.length - 1] === ',') {
      str = str.slice(0, str.length - 1)
    }
    return str + ']';
  }
  if (type === 'object') {
    var str = '{';
    for (var key in obj) {
      if (typeof(obj[key]) === 'function') {
        
      }
    }
  }
};
