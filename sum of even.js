// 7. find the sum of all even elements in an array

let arr   = [1,2,3,4,5];
  let sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
    sumEven += arr[i];
  }
}
  
console.log(sumEven);