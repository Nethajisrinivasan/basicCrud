"use strict";
exports.__esModule = true;
var strarr = ['nethaji', 'ragul', 'saravana', 'ragul', 'singaram', 'rajesh', 'nethaji'];
var obj = [];
strarr.forEach(function (e) {
    if (obj.indexOf(e) === -1) {
        obj.push(e);
    }
});
console.log(obj);
