var _ = require('lodash');

var objects = [{ 'row': 4 }, { 'row': 5 }];
 
_.sortedLastIndexBy(objects, { 'row': 4 }, function(o) { return o.row; });
console.log(objects)

_.sortedLastIndexBy(objects, { 'row': 4 }, 'row');
console.log(objects)
