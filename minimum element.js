// 2. find the minimum element in an array

let arr = [8,4,2,5,1,7,9]

for(let i=arr.length-1;i>=0;){
    if(arr[i]>arr[i-1]){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        i = arr.length-1
    }else{
        i--
    }
}
console.log(arr[arr.length-1])







