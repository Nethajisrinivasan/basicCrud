export{}
const anagrams:string[]=['listen','silent','race','care','triangle','integral','dormitory','dirty room',
        'astronomer','Moon starer','debit card','bad credit','the eyes','they see' ]
let obj={}
anagrams.map((e)=>{
    const sortedStr=e.split('').sort().join('');
    if(!obj[sortedStr]){
        obj [sortedStr]=[]
    }
    obj [sortedStr].push(e) 
})
console.log(obj)