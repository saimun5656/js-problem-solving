function getSum (arr){
  let sum = 0
  for(const num of arr){
    if(num>0){
        sum+=num
    }
  }
  return sum;
}
const result = getSum([5,-2,3,2,6,-6,-9,4]);
console.log(result);