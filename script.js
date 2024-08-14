// title 2 months of javaScript
// colab with ai the provide question on functions


// functions-------->
//!-------->1st task Calculate the Area of a Circle
const areaOfCircle=function(radius){
    const pi=3.14
    return pi*radius**2
 }
console.log(areaOfCircle(5));

//!------->2nd tast code a tip calculator
// this takes in the total bill amount and the percentage u 
// want to tip
function tipCalculator(billAmount,tipPercentage){
   return billAmount+(tipPercentage*0.01)*billAmount
}
console.log(tipCalculator(50,15));  

//!-------->3rd task capitalize each word
function capitalizeWords(sentence){
    return sentence.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
}
console.log(capitalizeWords("hello world! this is a test."));

//!-------->4th task check for palindrome
// a palindrome (a word or phrase that reads the same backward as forward)

const isPalindrome=function(str){
    const originalWold=str.toLowerCase().replaceAll(" ","");
    const dubedWord=originalWold.split("").reverse().join("")
    return originalWold===dubedWord
}

console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("hello"));


// function calling a function  







