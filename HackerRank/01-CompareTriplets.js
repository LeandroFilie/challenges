const a = [5, 6, 7];
const b = [3, 6, 10];

function compareTriplets(a, b) {
  let scoreAlice = 0;
  let scoreBob = 0;
  
  for(let i = 0; i <= a.length; i++){
      if(a[i] > b[i]){
          scoreAlice++;
      }
      else if(a[i] < b[i]){
          scoreBob++;
      }
  }
  
  return [scoreAlice, scoreBob]

}

const scores = compareTriplets(a, b);

console.log(scores);