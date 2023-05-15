"use strict";
exports.__esModule = true;
var message = "hi welcome to great kirikalam magic show....";
console.log(message);
//type declaration (let,var,const)
var a = 123; // any 
a = 1;
a = "Nethaji";
var b = 1.5;
b = 5;
b = 8.67890;
var c = "Ragul baiya";
var d = true;
var e;
var f;
var arr = [24, 56, 32, 12];
var arrstr = ["Nethaji", "Ragul baiya", "Mouli", "yoge", "siva"];
var multitype;
multitype = 123;
multitype = "Aravi";
var obj = {
    name: "Nethaji",
    age: 23,
    work: "full stack developer"
};
// obj.gender="male"
function sum(a, b) {
    return a + b;
}
function changecase(a) {
    return a.toLowerCase();
}
console.log(changecase("HELLO"));
//if we call fn like this // console.log(changecase2(2)) ;// throws error
function changecase2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase;
}
changecase2("HI", "Hello");
// Now we give value to b 
function changecase3(a, b) {
    if (b === void 0) { b = "Nethaji"; }
    return a.toLowerCase() + b;
}
console.log(changecase3("Hi"));
function summa(point) {
    return point.x + point.y;
}
//object
var p = {
    x: 12,
    y: 23
};
console.log(summa(p));
function add2(point) {
    return point.x + point.y;
}
console.log(add2(p));
