"use strict";
exports.__esModule = true;
var str = 'mahendrasinghdhoni';
var char = str.split("");
console.log(char);
// here we are create a empty oject to store,compare and print 
var obj = {};
// here we are create a empty oject to store,compare and print  
char.map(function (e) {
    //here we check the char is present in obj and add the occurance
    if (e in obj) {
        return obj[e] += 1;
    } //here we add the char in obj and set initialize key as 1 
    else {
        return obj[e] = 1;
    }
});
console.log(obj);
