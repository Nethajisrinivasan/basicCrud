export{}
let stuDet:any=[
    {
        name:'Nethaji',
        age:23
    },
    {
        name:'Ragul',
        age:22
    },
    {
        name:"Saravanan",
        age:22
    },
    {
        name:'Singaram',
        age:25
    },
    {
        name:'Andrew',
        age:20
    }
]
let obj={}
stuDet.map((e)=>{
    if(!(e.age in obj)){
        obj [e.age]=[]
    }
    obj[e.age].push(e)
})
console.log(obj)