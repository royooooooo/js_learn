var _ = require('lodash');

//debounce 防抖函数
var button = document.getElementById("btn")
button.addEventListener("click", _.debounce(() => {consoleNumber(500)}),500)