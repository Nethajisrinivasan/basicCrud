export{}
const names = [
    {name:'siva', date:'05-07-2002'},
    {name:'raj', date:'05-09-2008'},
    {name:'kamal', date:'02-11-2022'},
    {name:'ram', date:'05-07-2022'},
    {name:'kumar', date:'05-12-2010'}
];
let obj ={}
names.map(s => {
       
    if (!(s.date in obj)){
        obj[new Date(s.date).getFullYear()]=[{name:s.name}]
    }
})
console.log(obj)