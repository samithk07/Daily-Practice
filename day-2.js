//Check for Palindrome


function isPalindrome(str){
    return str===str.split("").reverse().join("")
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))