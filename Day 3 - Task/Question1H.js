let a = [1,2,3,4,5,6,7,8,9,10]; 
let n = a.length; 
let k = 2; 
let b=[];
(function() 
{ 
    k = k % n; 
  
    for (let i = 0; i < n; i++) { 
        if (i < k) {  
            // console.log(a[n + i - k] + " ");
            b.push(a[n + i - k]); 
        } 
        else { 
            // console.log((a[i - k]) + " ");
            b.push(a[i - k]); 
        } 
    } 
    console.log("After ",k ,"Rotation : ",b);
} )();
