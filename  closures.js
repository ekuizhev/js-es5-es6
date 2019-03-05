var funcs = [];

// I just create a funcs which are print your index
for (var i = 0; i < 5; i++) {
  var func = function() {
    console.log(i);
  }
  funcs.push(func);
}

// unexpected behavior
console.log('Results for funcs:');
funcs[0](); // ==> 5
funcs[4](); // ==> 5


// resolve with closures
var funcs2 = []; 

for (var i = 0; i < 5; i++) {
  var func = function(x) {
    return function () {
      console.log(x);
    }
  }(i);
  funcs2.push(func);
}

console.log('Results for funcs2:');
funcs2[0](); // ==> 0
funcs2[4](); // ==> 4


// or resolve with es6
const funcs3 = []; 

for (let i = 0; i < 5; i++) {
  funcs3.push(() => console.log(i));
}

console.log('Results for funcs3:');
funcs3[0](); // ==> 0
funcs3[4](); // ==> 4