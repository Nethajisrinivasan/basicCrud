export{}
let array:string[]=['nethaji','ragul','saravana','ragul','singaram','nethaji']
let obj={}

array.map (e =>{
    if (e in obj){
        return obj[e]+=1
    } else {
        return obj[e]=1
    }
})

console.log(obj)