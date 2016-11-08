// Ajax, Callback, and JSON Exercises

// CPS: 2

// Rewrite the following code (both of the functions and the calling code) in CPS:

// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }
//
// var x = 4;
// var y = 3;
// var answer = squareRoot(square(x) + square(y));
// console.log('The answer is: ' + answer);

// REWRITTEN

function getSquared(num, callback) {
  callback(num * num);
}

function getSqrt(num1, num2, callback) {
  callback(Math.sqrt(num1 + num2));
}

// the parameters in the function
// such as function(sum)
// the parameter sum is referring to the value
// being returned
function getUserInput(x, y) {
  getSquared(x, function(x) {
    getSquared(y, function(y) {
      getSqrt(x, y, function(sum) {
        console.log('The answer is', sum + '!');
      })
    });
  });
};

getUserInput(3, 4);

//
