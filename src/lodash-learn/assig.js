var _ = require('lodash');

//assign 对象拓展
let foo = {
    a: "a test"
}

let bar = {
    b: 4,
    c: "c test"
}

let result = _.assign({ a: "a1 test" }, foo, bar)

console.log(result)

result = _.assign(foo, bar)
console.log(result)
console.log(foo)