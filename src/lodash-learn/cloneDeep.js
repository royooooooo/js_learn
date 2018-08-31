var _ = require('lodash');

var original1 = { foo: "bar" };
var copy1 = original1;
copy1.foo = "new value";
console.log(original1)
console.log(copy1)

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";
console.log(original)
console.log(copy)