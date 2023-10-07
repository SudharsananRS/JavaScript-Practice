let ar1 = [ 1, 22, 35, 46, 58 ];
let ar2 = [ 2, 23, 37, 40, 55 ];

let len1 = ar1.length;
let len2 = ar2.length;
if (len1 == len2)
    {
        let n=len1;
        (function ()
    {
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log((m1 + m2)/2);
    })();

        
    }
    else
        console.log("array size is not same");

