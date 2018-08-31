var _ = require('lodash');

let bar = { foo: "test"}
_.set(bar,"foo","test2")
let name = _.get(bar,"foo")
console.log(bar)
console.log(name)
