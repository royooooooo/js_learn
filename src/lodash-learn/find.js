var _ = require('lodash');

//查找数组中的特定对象
let users = [
    { name: "roy", age: 22, sex: "men" },
    { name: "betty", age: 18, sex: "women" },
    { name: "test", age: 14, sex: "men" }
]

let user = _.find(users, { name: "roy" })
console.log(user)

let underAge = _.find(users, (user) => {
    return user.age >= 18
})
console.log(underAge)
