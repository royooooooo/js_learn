var _ = require('lodash');

let users = [
    { name: "roy", age: 22, sex: "men" },
    { name: "betty", age: 18, sex: "women" },
    { name: "test", age: 14, sex: "men" }
]

users = _.keyBy(users,"name")
console.log(users)
console.log(users.roy)
