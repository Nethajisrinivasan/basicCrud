"use strict";
exports.__esModule = true;
var array = ['nethaji', 'ragul', 'saravana', 'ragul', 'singaram', 'nethaji'];
var obj = {};
array.map(function (e) {
    if (e in obj) {
        return obj[e] += 1;
    }
    else {
        return obj[e] = 1;
    }
});
console.log(obj);
