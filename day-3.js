//Remove duplicate element from the arrya
const removeDuplicate=(arr)=>{
let num=[]
for(let i=0;i<arr.length;i++){
    if(!num.includes(arr[i])){
        num.push(arr[i])
    }

}
return num
}
const numbers=[1,2,3,3,4,2,5,6]
console.log(removeDuplicate(numbers))


// using set Methode

// const removeDuplicate=(arr)=>[...new Set(arr)]
//     console.log(removeDuplicate([1,2,3,3,4,2,5,4,6]))
