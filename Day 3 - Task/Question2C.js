const sumArray=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        total+=arr[i];
    }
    return total;
}

let arr=[1,2,3,4,5,6,7,8,9,10];
let n=arr.length;
let total=0;

console.log(sumArray(arr,n));