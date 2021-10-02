/*Daniel Dietrich - Assignment 4 - INF 651
NOTE: After the function of each question is a portion of JavaScript
to test each function. These test can be used by running the index.html
file. */


// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".
function helloWorld() {
    return "Hello World!";
}
alert(helloWorld()); //Tests Question #1 function

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

function greeting(name) {
    return ("Hello, " + name + ".");
}

userName = window.prompt("Please enter your name: " );//Tests Question #2 function

alert(greeting(userName));


// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.
function divisibleByThree(number) {
    return (number % 3) === 0;
}

testNumber = window.prompt("Please enter a number: " ); //Tests Question #3 function
let result = divisibleByThree(testNumber);
if (result) {
    alert(testNumber + " is divisible by three.")
}
else {
    alert(testNumber + " is not divisible by three.")
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
function averageAge (num1, num2, num3) {
    if (num3 === undefined) {
        return ((Number(num1) + Number(num2)) / 2);
    }
    else {
        return ((Number(num1) +Number(num2) + Number(num3)) / 3);
    }
}

let testN1;//Tests Question #4 function
let testN2;
let testN3;
testN1 = window.prompt("Please enter an age: " ); 
testN2 = window.prompt("Please enter a second age: " ); 
let q4Result = averageAge(testN1, testN2, testN3);
alert("The average age of " + testN1 + " and " + testN2 + " is " + q4Result + ".");

testN3 = window.prompt("Please enter a third age: ");
q4Result = averageAge(testN1, testN2, testN3);
alert("The average age of " + testN1 + ", "+ testN2 + ", and " + testN3 + " is " + q4Result + ".");

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.

function leetSpeak(word){
    leetVersion = "";
    for (i = 0; i < word.length; i++){
        //console.log("Loop " + i);
        if (word.charAt(i) === 'e' ){
            leetVersion = leetVersion + '3';
            //console.log("e change");
        }
        else if (word.charAt(i) === 'a' ){
            leetVersion = leetVersion +'4';
            //console.log("e change");
        }
        else {
            leetVersion = leetVersion + word.charAt(i);
            //console.log("no change");
        }
    }
    //console.log(leetVersion);
    return leetVersion;
}

let userWord = window.prompt("Please Enter a Word: " ); 
let leetUserWord = leetSpeak(userWord);
alert("The Leet Speak version of \"" + userWord + "\" is \"" + leetUserWord + ".\"");