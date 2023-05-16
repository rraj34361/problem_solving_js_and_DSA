// 8. find the sum of all odd elements in an array


let arr   = [1,2,3,4,5];
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0){
    sumOdd += arr[i];
  }
}
  
console.log(sumOdd);