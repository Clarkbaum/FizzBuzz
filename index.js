//FizzBuzz
//Print out numbers 1 to 100
//if the number is divisible by 3, print Fizz 
//if by 5, print Buzz.
//if by both print FizzBuzz

var max = 100;
var min = 1;

for (var i = min; i <= max; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('i - ', i, 'FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('i - ', i, 'Fizz');
  } else if (i % 5 === 0) {
    console.log('i - ', i, 'Buzz');
  } else {
    console.log('i - ', i);
  }
}