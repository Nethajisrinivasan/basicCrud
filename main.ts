export {};
let message = "hi welcome to great kirikalam magic show....";
console.log(message);

//type declaration (let,var,const)
let a: any = 123; // any
a = 1;
a = "Nethaji";

let b: number = 1.5;
b = 5;
b = 8.6789;

let c: String = "Ragul baiya";
let d: boolean = true;
let e: null;
let f: undefined;

let arr = [24, 56, 32, 12];
let arrstr: String[] = ["Nethaji", "Ragul baiya", "Mouli", "yoge", "siva"];
let multitype: number | string;
multitype = 123;
multitype = "Aravi";
let obj = {
  name: "Nethaji",
  age: 23,
  work: "full stack developer",
};
// obj.gender="male"

function sum(a: number, b: number): number {
  return a + b;
}

function changecase(a) {
  return a.toLowerCase();
}
console.log(changecase("HELLO"));
//if we call fn like this // console.log(changecase2(2)) ;// throws error

function changecase2(a: string, b: string) {
  // if we give ? it wont consider the type of the data
  if (b) return a.toLowerCase() + b;
  return a.toLowerCase;
}
changecase2("HI", "Hello");

// Now we give value to b
function changecase3(a: string, b: string = "Nethaji") {
  return a.toLowerCase() + b;
}
console.log(changecase3("Hi"));

function summa(point: { x: number; y: number }) {
  return point.x + point.y;
}

//object
let p = {
  x: 12,
  y: 23,
};
console.log(summa(p));

//Interface
interface point {
  x: number;
  y: number;
  z?: number;
}
function add2(point: point) {
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
class car {
  private _engine: string;
  constructor(engine: string) {
    this.engine = engine;
    console.log(this.engine);
  }
  get engine(): string {
    console.log("inside get");
    return this._engine;
  }
  set engine(value: string) {
    console.log("inside set");
    if (value == undefined) throw "supply an engine!";
    this._engine = value;
  }
}
let car1 = new car("audi");
console.log(car1.engine);
// console.log(c1.engine);

// let c2 = new car("Kia")

// console.log(c2.stop());

class Engine{
    constructor(public horsepower:number,public enginetype:string){}
    
}
class auto {
    engine:Engine;
    constructor(engine:Engine){
        this.engine=engine;
        console.log("inside engine")
    }
}

class truck extends auto{
    fourbyfour:boolean;
    constructor(engine:Engine,fourbyfour:boolean){
        super(engine);

        this.fourbyfour=fourbyfour
        console.log("inside truck")
    }
}

let eng = new Engine(300,"v8")
let truck1 = new truck(eng,true)

//interface
interface action {
    start (message:string);
    stop (message:string);
}
class cars implements action {
constructor (public engine:string){
    this.engine=engine;
}
start (message:string){
    console.log(this.engine + message);
}

stop (message:string){
    console.log(this.engine + message);
}
}
var e1 = new cars('v8');
e1.start("started");

//enum
enum department{
  mech,cse,eee,it,ece
}
console.log("enum of dept : "+department.cse)

//diff ways to add a data in an object
//spread operator (...)

let myfunc =(obj:object)=>{
  return{...obj,greet:'hi'}
}
let myfunc1 =(obj:object)=>{
   obj.greet='hello'
   return obj
}
let myfunc2 =<T>(obj:T)=>{ //<T> genrics
  obj['greet']='bye'
  return obj
}
a={
  name:"nethaji",
  age:23
}
b=myfunc2(a)
console.log(b.name)