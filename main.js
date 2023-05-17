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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hi welcome to great kirikalam magic show....";
console.log(message);
//type declaration (let,var,const)
var a = 123; // any
a = 1;
a = "Nethaji";
var b = 1.5;
b = 5;
b = 8.6789;
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
    work: "full stack developer",
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
    // if we give ? it wont consider the type of the data
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
    y: 23,
};
console.log(summa(p));
function add2(point) {
    return point.x + point.y;
}
console.log(add2(p));
// class car{
//     engine:string;
//     constructor(engine:string){
//         this.engine=engine;
//     }
// }
// class car{
//     constructor(public engine:string){}
// }
//functions
// class car{
//     engine:string;
//     constructor(engine:string){
//         this.engine=engine;
//     }
//     start(){
//         return "started"+this.engine;
//     }
//     stop(){
//         return "stopped"+this.engine;
//     }
// }
//get set
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
        console.log(this.engine);
    }
    Object.defineProperty(car.prototype, "engine", {
        get: function () {
            console.log("inside get");
            return this._engine;
        },
        set: function (value) {
            console.log("inside set");
            if (value == undefined)
                throw "supply an engine!";
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var car1 = new car("audi");
console.log(car1.engine);
// console.log(c1.engine);
// let c2 = new car("Kia")
// console.log(c2.stop());
var Engine = /** @class */ (function () {
    function Engine(horsepower, enginetype) {
        this.horsepower = horsepower;
        this.enginetype = enginetype;
    }
    return Engine;
}());
var auto = /** @class */ (function () {
    function auto(engine) {
        this.engine = engine;
        console.log("inside engine");
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
var eng = new Engine(300, "v8");
var truck1 = new truck(eng, true);
var cars = /** @class */ (function () {
    function cars(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    cars.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    cars.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return cars;
}());
var e1 = new cars('v8');
e1.start("started");
//enum
var department;
(function (department) {
    department[department["mech"] = 0] = "mech";
    department[department["cse"] = 1] = "cse";
    department[department["eee"] = 2] = "eee";
    department[department["it"] = 3] = "it";
    department[department["ece"] = 4] = "ece";
})(department || (department = {}));
console.log("enum of dept : " + department.cse);
//diff ways to add a data in an object
//spread operator (...)
var myfunc = function (obj) {
    return __assign(__assign({}, obj), { greet: 'hi' });
};
var myfunc1 = function (obj) {
    obj.greet = 'hello';
    return obj;
};
var myfunc2 = function (obj) {
    obj['greet'] = 'bye';
    return obj;
};
a = {
    name: "nethaji",
    age: 23
};
b = myfunc2(a);
console.log(b.name);
