const findPalindrome=(arr,N)=>{
    let arr_temp=[];
    for(let i=0;i<N;i++)
    {
        let temp=arr[i];
        temp=temp.split('').reverse().join('');
        if(arr[i]==temp)
        {
            arr_temp.push(temp);
        }
    }
    return arr_temp;
}

let arr = [ "abc", "car", "ada", "racecar", "cool","madam","121"];
let N = arr.length;
let ans=findPalindrome(arr,N);

console.log("Plaindrome is Array : ", ans);
