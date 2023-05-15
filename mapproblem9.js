"use strict";
exports.__esModule = true;
var anagrams = ['listen', 'silent', 'race', 'care', 'triangle', 'integral', 'dormitory', 'dirty room',
    'astronomer', 'Moon starer', 'debit card', 'bad credit', 'the eyes', 'they see'];
var obj = {};
anagrams.map(function (e) {
    var sortedStr = e.split('').sort().join('');
    if (!obj[sortedStr]) {
        obj[sortedStr] = [];
    }
    obj[sortedStr].push(e);
});
console.log(obj);
