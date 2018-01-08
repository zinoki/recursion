// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  var type = typeof(obj);
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
    var str = '';
    for (var i = 0; i < obj.length; i++) {
      if (str !== "") {
        str = str + "," + stringifyJSON(obj[i]);
      }
      else {
        str = stringifyJSON(obj[i])
      }
    }
    return '[' + str + ']';
  } else if (type === 'object' && obj !== null) {
    var str = "";
    for (var key in obj) {
        if (typeof(obj[key]) !== 'function' && typeof(obj[key]) !== 'undefined') {
          if (str != "") {
            str = str + "," + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
          } else {
            str = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          }
        }
      }
    return "{" + str + "}";
  } else {
    return String(obj);
  }

};
