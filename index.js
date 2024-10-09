let myNumber = 10; // Declaring a variable
let myString = "Hello, JavaScript!"; // Declaring a variable

console.log(myNumber);  // Prints the myNumber
console.log(myString);  // Prints the myString

for(let n = 0; n <= 10; n++) {
    console.log(n);  // Prints from 1 to 10
}

for(let n = 1; n <= 5; n++) {
    console.log(n * 3);  // Prints n * 3   n goes up to 5
}

function addNumbers(num1, num2) {
    return num1 + num2;  // Returns the sum of num1 and num2
}

console.log(addNumbers(10, 5));  // Prints the result

function multiplyNumbers(num1, num2) {
    return num1 * num2;  // returns product of num1 and num2
}

console.log(multiplyNumbers(10, 5));  // Prints the result
