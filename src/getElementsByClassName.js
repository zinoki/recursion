// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var getElements = function(node) {
    if (node.classList !== undefined) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {
          results.push(node)
        }
      }
    }
    for (var j = 0; j < node.childNodes.length; j++) {
      getElements(node.childNodes[j])
    }
  }
  getElements(document.body);
  return results;
};
