var foo = 10;

function bar() {
  console.log(foo); // What you expected?

  if (foo === false) {
    var foo = 12;
  }
}

bar(); // --> undefined

// This behavior is associated with the hosting
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// In lexical environment of bar func declared foo 
// variable how undefined, so the value is taken from it
