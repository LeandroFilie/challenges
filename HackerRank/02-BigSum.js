const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function getSumArray(array){
  sumArray = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )

  return sumArray;
}

const sum = getSumArray(array);

console.log(sum );