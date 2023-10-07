let arr = [ "abc", "car", "ada", "racecar", "cool","madam","121"];
let N = arr.length;
let ans=[];
(function(){
    for(let i=0;i<N;i++)
    {
        let temp=arr[i];
        temp=temp.split('').reverse().join('');
        if(arr[i]==temp)
        {
            ans.push(temp);
        }
    }
    console.log("Palindrome in Array : ",ans);
} )();
