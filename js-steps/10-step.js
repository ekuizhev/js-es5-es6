
const printR = (obj) => {
  const prettyStr = JSON.stringify(obj, null, 4);

  console.log(prettyStr);
}

const user = {
  name: "Vasya",
  surname: "Ivanov",
  age: 23,
  work: {
    place: "Google Inc",
    experience: "3 age",
    array: [1,2,3,4,5,6,7,8,9,200,234,423,4231],
    objects: {
      obj1: {
        name: "Evgeny"
      },
      obj2: {
        name: "Peter"
      }
    }
  }
}

printR(user);