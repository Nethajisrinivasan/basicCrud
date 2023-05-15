"use strict";
exports.__esModule = true;
var a1 = [1, 2, 3, 4, 5, 6, 7];
//here we use arrow function to cut off the function keyword and return statement
var a2 = a1.map(function (a) { return a * a; });
console.log(a2);
