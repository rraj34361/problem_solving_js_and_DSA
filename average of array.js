// 6. find the average of all elements in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;
console.log(avg);

