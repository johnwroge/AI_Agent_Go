/**
 * FizzBuzz function that prints numbers from 1 to 15
 * - For multiples of 3, prints "Fizz"
 * - For multiples of 5, prints "Buzz"
 * - For multiples of both 3 and 5, prints "FizzBuzz"
 * - Otherwise, prints the number
 */
function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call the function
fizzBuzz();