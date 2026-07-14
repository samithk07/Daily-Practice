//Find the missing number

const findMissingNum=(arr)=>{
const n=arr.length+1
const expectedSum=(n*(n+1))/2

let actualSum=0
for(const num of arr){
    actualSum+=num
}
return expectedSum-actualSum
}
console.log(findMissingNum([1,2,4,5,6]))