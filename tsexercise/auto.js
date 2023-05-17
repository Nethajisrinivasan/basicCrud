"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = require("./engine");
var auto = /** @class */ (function () {
    function auto(engine) {
        this.engine = engine;
        console.log("inside engine");
        console.log(this.engine);
    }
    return auto;
}());
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(engine, fourbyfour) {
        var _this = _super.call(this, engine) || this;
        _this.fourbyfour = fourbyfour;
        console.log("inside truck");
        return _this;
    }
    return truck;
}(auto));
var e = new engine_1.Engine(300, '1000cc');
var t = new truck(e, true);
