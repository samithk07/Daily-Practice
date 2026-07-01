// second largest number

const secondLargestNum = (arr) => {
    let largest = -Infinity
    let secondLargest = -Infinity

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest
            largest = num
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num
        }
    }

    return secondLargest
}

console.log(secondLargestNum([10, 30, 40, 50, 60]))