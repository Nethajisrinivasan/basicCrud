export {}
let message="hi welcome to great kirikalam magic show....";
console.log(message);

//type declaration (let,var,const)
let a:any=123; // any 
a=1;
a="Nethaji";

let b:number=1.5;
b=5;
b=8.67890;

let c:String="Ragul baiya";
let d:boolean=true;
let e:null;
let f:undefined;

let arr=[24,56,32,12];
let arrstr:String[]=["Nethaji","Ragul baiya","Mouli","yoge","siva"]
let multitype:number|string;
multitype=123;
multitype="Aravi";
let obj={
    name:"Nethaji",
    age:23,
    work:"full stack developer"

}
// obj.gender="male"

function sum(a:number,b:number):number{
return a+b;
}

function changecase(a){
    return a.toLowerCase()

}
console.log(changecase("HELLO"));
//if we call fn like this // console.log(changecase2(2)) ;// throws error

function changecase2(a:string,b:string){  // if we give ? it wont consider the type of the data
    if(b)
        return a.toLowerCase()+b;
    return a.toLowerCase

}
changecase2("HI","Hello") ;

// Now we give value to b 
function changecase3(a:string,b:string="Nethaji"){  
        return a.toLowerCase()+b;
}
console.log(changecase3("Hi"))


function summa (point:{x:number,y:number}){
return point.x + point.y
}

//object
let p={
    x:12,
    y:23
}
console.log(summa(p))

//Interface
interface point{
    x:number,
    y:number,
    z?:number
}
function add2(point:point){
    return point.x + point.y
}

console.log(add2(p))