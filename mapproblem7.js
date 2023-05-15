"use strict";
exports.__esModule = true;
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var obj = {};
num.map(function (e) {
    if (!(e in obj)) {
        obj[e] = [];
    }
    for (var i = 1; i <= e; i++) {
        if (e % i == 0) {
            obj[e].push(i);
        }
    }
});
console.log(obj);
