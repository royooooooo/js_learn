var _ = require('lodash');

// times 迭代函数
var getRandomInteger = () => {
    let test = parseInt(Math.random() *10);
    console.log(test)
    return test;
}

result = _.times(5, getRandomInteger)
console.log(result)