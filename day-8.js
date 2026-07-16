//Check how many are even number in the array

function findEvenNum(nums) {
let evenCount=0
for(let num of nums){
    if(num%2===0){
        evenCount++
    }
}
return evenCount
}
const arr=[1,2,3,3,4,4,54,6,7]
console.log(findEvenNum(arr));

