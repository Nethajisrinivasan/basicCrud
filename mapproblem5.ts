export{}
const objarr:any=[
    {
        name:'Nethaji',
        role:'development'
    },
    {
        name:'ragul',
        role:'development'
    },
    {
        name:'siva',
        role:'cyber'
    },
    {
        name:'gokul',
        role:'finance'
    }
]
let obj:any={}
objarr.map((e) =>{
    if (!(obj[e.role])){
        obj [e.role]=[e]
    }
    // obj[e.role].push(e)
})
console.log(obj)