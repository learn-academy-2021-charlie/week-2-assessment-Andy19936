// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: In this bit of code we are using split() to split our cohort string into individual arrays 

// b) Verify and explain: My answer seems to be correct I recieved a return of each letter individually broken up into an array of its own noice!


// --------------------2) What will this log?

const greeter = (name) => {
 return `Hello, ${name}!`
}
console.log(greeter("Austin or Sarah"))

// a) Your answer: In this bit of code you are making a function and telling it to return hello with the parameter of your name by using string invocation so I believe you'll see "Hello LEARN Student!" in your terminal.

// b) Verify and explain: *big oof* you wont see anything but undefined because you aren't giving it a return here let me fix that!


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: You are using .map to take the values of the OG array and reassigning them to a new array where they should all be multiplied by 2 so you should see [8,10,12,14,16] *cross fingers and continue assuming everything works until it doesn't* ¯\_(ツ)_/¯

// b) Verify and explain: *faith in humanity restored* It worked! see told ya!


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: So here I believe you are using filter() to give you all the values that are even by using modulo which checks if there is a remainder when you divide the number by 2 thus making it even if there isn't a remainder. so you should see [12,14] * very clever use of naming your variable.. I see you!*

// b) Verify and explain: Noice! terminal returned [12, 14]


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn 
// console.log(learnStudent)

// a) Your answer: Here you are creating an empty instance but an instance none the less to the class of Learn by using the key word new so I believe your terminal will display all the input in the OG class of Learn and say student george cohort charlie year 2021

// b) Verify and explain: Noice! We recieved the expected outcome of student george cohort charlie year 2021
