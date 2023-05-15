export{}

//String Palindrome
let a:string="salsa";
let b:String=a.split("").reverse().join("");
if (a===b){
    console.log(a+" is a palindromme")
}
else{
    console.log(a+" is not a palindromme")
}