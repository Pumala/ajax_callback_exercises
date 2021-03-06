// Ajax, Callback, and JSON Exercises

// CPS: 1.5

// Rewrite the following code (both of the functions and the calling code) in CPS:

// function square(num) {
//   return num * num;
// }
//
// function times2(num) {
//   return num * 2;
// }

// var squared = square(5);
// var result = times2(squared);
// console.log('Result is:', result);

function square(num, callback) {
  callback(num * num);
}

function times2(num, callback) {
  callback(num * 2);
}

function sqrtCPS(num) {
  square(num, function(num) {
    times2(num, function(num) {
      console.log(num);
    })
  });
}

sqrtCPS(5);
