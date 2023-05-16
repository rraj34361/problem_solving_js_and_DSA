// 4. find the second smallest element in an array


let arr = [1, 4, 5, 7, 2, 6, 0];

for (let i = 0; i < arr.length; ) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    i = 0;
  } else {
    i++;
  }
}
console.log(arr[1])

