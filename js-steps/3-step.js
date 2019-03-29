// step 3
let obj = {
  '+11': 'Evgeny',
  '+22': 'Alex',
  '+33': 'Peter',
}

// summ of obj keys
const result = Object.keys(obj)
  .reduce((acc, val) => acc + parseInt(val), 0); // --> 66

console.log({result});
