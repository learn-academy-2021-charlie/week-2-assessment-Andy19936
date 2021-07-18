// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// create a function named divBy3 
// use a conditional statement
// using the modulo to decide if the parameter is divisible by 3
// write out my returns
// review test challenges for jest syntax
// input all my test parameters
// lets see how this goes 

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("The divBy3 function.",()=>{
    test("takes a number and determines if it is evenly divisible by 3",() => {
        expect(divBy3(15)).toEqual(`15 is divisible by three`)
        expect(divBy3(0)).toEqual(`0 is divisible by three`)
        expect(divBy3(-7)).toEqual(`-7 is not divisible by three`)
    })
})

const divBy3 = (number) =>{
    if(number % 3 == 0){
        return`${number} is divisible by three`
        } else {
        return `${number} is not divisible by three`
        }
}
console.log(divBy3(3))





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// create a function were going with allCaps *RIP MFDOOM
// the function is going to take in an array and return a new array w
// use map()
// use .touppercase() to capitalize the new array in all caps 
// hope it works
// realize only the first letter needs to be capitalized.. back to the drawing board
// sticking wiht .map using split 


// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.

describe("The allCaps function.",()=>{
    test("takes an array and returns a new array that has all been capitalized",() => {
        expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

const allCaps = (array) =>{
    let capitalizedArray = array.map(value =>{
        return value[0].toUpperCase() + value.substring(1)
    })
    return capitalizedArray
}
var testArray = ["all", "happy", "people"]
 console.log(allCaps(testArray))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

// b) Create the function that makes the test pass.


// assign your function a name were going with firstVowel
// use split to split my string into an array
// use filter to log the first instcance of vowels 
// give a return of the vowel
// change of plans going to use charAt and a for loop instead
// dedicate all your brain juice to classes and forget for loops
// review and play with for loop for an hour -_-
// spend another hour changing things up reach out to Austin and Sarah
// reach desired outcome! Thanks for the help guys!

describe("The firstVowel function.",()=>{
    test("takes a string and tells you the index of the first occurence of a vowel",() => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

const firstVowel = (string)=>{
    
    for(let i=0;i <string.length; i++){ 
        if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" ||string.charAt(i) == "o" ||string.charAt(i) == "u"){
            return i
        }
    }  
}
var newString = "lalaas"
console.log(firstVowel(newString))