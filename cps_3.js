// Ajax, Callback, and JSON Exercises

// CPS: 2

// Add a 1000 millisecond delay to the CPS version of the square function you wrote for the last exercise, and a 500 millisecond delay to the squareRoot function. Re-run the code and see that there's a delay before the answer is printed.

// REWRITTEN

function getSquared(num, callback) {
  setTimeout(function() {
    callback(num * num);
  }, 1000);
}

function getSqrt(num1, num2, callback) {
  setTimeout(function() {
    callback(Math.sqrt(num1 + num2));
  }, 1000);
}

function getUserInput(x, y) {
  getSquared(x, function(x) {
    console.log('x squared is', x);
    getSquared(y, function(y) {
      console.log('y squared is', y);
      getSqrt(x, y, function(sum) {
        console.log('The answer is', sum + '!');
      })
    });
  });
};

getUserInput(3, 4);
