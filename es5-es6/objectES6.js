// Object ES6 additions
const yearsOld = 'age';
const username = 'ekuizhev';

const person = {
  name: 'Evgeny',
  
  // dinamic property
  [yearsOld]: 22,
  
  // use only name of property
  username,

  // just method of object
  greet() {
    console.log(`Hello ${this.name}`)
  },

  // getter
  get password() {
    return this.username + this.age;
  }
}

console.log(person.password); // ==> ekuizhev22
person.greet(); // ==> Hello Evgeny