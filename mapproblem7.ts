export{}
const num:number[]=[1,2,3,4,5,6,7,8,9,10]
let obj:any={}
num.map((e)=>{
    if(!(e in obj)){
        obj[e]=[]
    }
    for (let i:number=1;i<=e;i++){
        if (e%i==0){
        obj[e].push(i)
        }
    }
})
console.log(obj)