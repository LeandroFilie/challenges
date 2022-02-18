const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]

function diagonalDifference(arr) {
  let sumPrimaryDiagonal = 0;
  let sumSecondaryDiagonal = 0;
  
  for(let i = 0; i < arr.length; i++){
      sumPrimaryDiagonal += arr[i][i];
      sumSecondaryDiagonal += arr[i][arr.length - i - 1]
  }

  return Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal);
}

const result = diagonalDifference(arr);

console.log(result);