"use strict";
exports.__esModule = true;
var objarr = [
    {
        name: 'Nethaji',
        role: 'development'
    },
    {
        name: 'ragul',
        role: 'development'
    },
    {
        name: 'siva',
        role: 'cyber'
    },
    {
        name: 'gokul',
        role: 'finance'
    }
];
var obj = {};
objarr.map(function (e) {
    if (!(obj[e.role])) {
        obj[e.role] = [e];
    }
    // obj[e.role].push(e)
});
console.log(obj);
