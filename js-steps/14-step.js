
const filterRangeInPlace = (array, a, b) => {
  let index = 0;

  while (index < array.length) {
    const val = array[index];
    const valInPlace = val >= a && val <= b;

    if (valInPlace)
      index++;
    else
      array.splice(index, 1);
  }
}

let arr = [1, 2, 3, 4, 22, 11, 6, 12, 55];

filterRangeInPlace(arr, 3, 7);
console.log(arr);
