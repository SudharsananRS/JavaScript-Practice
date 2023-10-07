const initPrimeCheck=(arr,n)=>{
    let temp_arr=[];
    for(let i=0;i<n;i++){
        if(checkPrime(arr[i]) || arr[i]==1 || arr[i]==2)
            temp_arr.push(arr[i]);
    }
        return temp_arr;
        
}

const checkPrime=(k)=>{
    let j=2;
    // if(k==1 || k==2)
    // return k;
    for(;j<k;j++)
    {
        if(k%j==0)
        {
            break;
        }
    }

    if(k==j)
        return k;
}
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let n=arr.length;
let fin_arr=initPrimeCheck(arr,n);

console.log("Prime Numbers : ",fin_arr);