function secondSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = arr[1];
  
    if (smallest > secondSmallest) {
      [smallest, secondSmallest] = [secondSmallest, smallest];
    }
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
    return secondSmallest
  }
  
  
  const result = secondSmallest([5, 3, 4, 16, 18, 89]); 
  console.log(result);