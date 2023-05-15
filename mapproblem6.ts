export{}
const strarr: string[] = ['nethaji', 'ragul', 'saravana', 'ragul', 'singaram', 'rajesh', 'nethaji'];
const obj: string[] = [];

strarr.forEach((e) => {
  if (obj.indexOf(e) === -1) {
    obj.push(e);
  }
});

console.log(obj);

