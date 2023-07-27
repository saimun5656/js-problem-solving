function findMostFreq (arr){
  const counterObj ={}
  for(const number of arr){
     counterObj[number]=(counterObj[number]||0)+1;
  }
  let maxcount = 0;
  let mostFreq;
  for(const key in counterObj){
   if(counterObj[key]>maxcount){
     maxcount =counterObj[key]
     mostFreq =key
   }
  }
  return mostFreq
}
const result = findMostFreq([3,4,6,7,3,2,3,2,5,5,120,120,120,120,3,4,4,4,7,,7,7,6,7,7])
console.log(result);
