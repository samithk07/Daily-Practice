//Capitalize First Letter

let str="hello world"

let result=str.split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")
console.log(result)