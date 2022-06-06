/* 
👉 Write your kata's scenario/description here!

    You are given an array of objects where each object contains information about an API
    call done earlier in the program. This imaginary API has two components, an array of numbers and
    a boolean value. The objective of this function is to parse the given array of objects and return the max sum out of
    the object array. You must not use any arrays of an object that has a boolean of false or any object arrays that do not 
    contain numbers. 
    The object should have the form {boolean: true/false, numbers:array of any size that will only have a single data type}. 
    If there are no valid objects or if the max sum is zero, return 0.
    objectArraySum(6) // return 0
    objectArraySum([{boolean:true, numbers: [0,1,2,3,4,5]}]) // return 15 
*/

//👉 Write the function your CodeWarriors will start with below here:
function objectArraySum(input) {}

module.exports = objectArraySum;
