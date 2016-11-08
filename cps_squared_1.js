// Ajax, Callback, and JSON Exercises

// CPS: 1

// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:

function square(num) {
  return num * num;
}

var squared = square(5);


// REWRITTEN

function squaredCPS(num, callback) {
  callback(num * num);
}

// using the squaredCPS function
squaredCPS(5, function(answer) {
  console.log('The answer is', answer + '.');
});
