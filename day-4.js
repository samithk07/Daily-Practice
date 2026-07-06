const findLargestWord=(sen)=>{
const words=sen.split(" ")
let largest=" ";
for (const word of words){
    if(word.length>largest.length){
        largest=word
    }
return largest
}
}
console.log(findLargestWord("JavaScript is awesome"))