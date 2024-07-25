

//Reverse a String: Write a function that reverses a given string.//

function reversedstr(str){
    let result ='';
    for(let char of str){
        result = char+result
    }
    return result
}

reversedstr('saywara')

//Count Characters: Create a function that counts the number of characters in a string//
function countCharactersWithoutSpaces(inputString) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            count++;
        }
    }
    return count;
}


let inputStr = "Hello World";
console.log("Number of characters (excluding spaces):", countCharactersWithoutSpaces(inputStr));

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.//
function capWord(string){
    let word = string.split("")
    for(let i = 0; i < word.length; i++){
        word[i] = word[i][0]. toUpperCase() + word[i].substr()
    }
    return word.join("")
}

console.log(capWord('string saysay'))

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.//

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  //Sum of Array: Create a function that calculates the sum of all elements in an array.//
  
  function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Sum of array elements:", sumArrayElements(numbers));

//Filter Array: Implement a function that filters out elements from an array based on a given condition//

function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterArray(numberss, function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

//Factorial: Write a function to calculate the factorial of a given number//

function factorialIterative(n) {
    if (n < 0) {
        return undefined;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let num = 5;
console.log(`Factorial of ${num} is:`, factorialIterative(num));

//Prime Number Check: Create a function to check if a number is prime or not.//

function isPrime(n) {
  
    if (n <= 1) {
        return false;
    }
    
   
    if (n <= 3) {
        return true;
    }
    
    
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}
let num1 = 17;
console.log(`${num1} is prime:`, isPrime(num1));



//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms//

function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }
    
    let sequence = [0, 1]; 

    for (let i = 2; i < n; i++) {
        let nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }
    
    return sequence;
}

let numTerms = 10;
console.log(`Fibonacci sequence with ${numTerms} terms:`, generateFibonacci(numTerms));