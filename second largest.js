// 3. find the second largest element in an array

let arr = [2,5,2,3,7,1,8,2,3,4,5]

for(let i = arr.length-1; i>=0;){
    if(arr[i]>arr[i-1]){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        i= arr.length-1
    }else{
        i--
    }
}

console.log(arr[1])