let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let n=arr.length;
let fin_arr=[];
//Anonymous Function
(function(){
    for(let i=1;i<n;i++){
        if(check_prime(i))
            fin_arr.push(i);
    }
        console.log("Prime numbers in an array : ",fin_arr);
        
})();

function check_prime(i)
{
    let j=2;
    for(;j<n;j++)
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(i==1 || i==2)
        return i;
    else if(i==j)
        return i;
}