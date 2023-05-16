"use strict";
exports.__esModule = true;
var greeter = /** @class */ (function () {
    function greeter(message) {
        this.greeting = message;
    }
    greeter.prototype.greet = function () {
        return "hello " + this.greeting;
    };
    return greeter;
}());
