var _ = require('lodash');

var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
console.log(objects)

_.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
console.log(objects)
