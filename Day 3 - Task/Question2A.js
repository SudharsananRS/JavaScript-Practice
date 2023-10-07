const find_Odd_number=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        // console.log(arr[i]);
        if(arr[i]%2==1)
            console.log(arr[i]);
    }

}

let arr=[1,2,3,4,5,6,7,8,9,10];
let n=arr.length;

find_Odd_number(arr,n);

