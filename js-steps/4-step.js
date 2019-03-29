// step 4

// clone with inheritance
const clone = obj => Object.create(obj);

// clone with spread operator
const clone2 = obj => ({...obj});

// clone with assign
const clone3 = obj => Object.assign({}, obj);

const obj = {
  name: 'Vasya',
}

const obj2 = clone(obj);
const obj3 = clone2(obj);
const obj4 = clone3(obj);

obj2.name = 'Evgeny';
obj3.name = 'Alex';
obj4.name = 'Peter';

console.log(obj, obj2, obj3, obj4);
// { name: 'Vasya' } { name: 'Evgeny' } { name: 'Alex' } { name: 'Peter' }
