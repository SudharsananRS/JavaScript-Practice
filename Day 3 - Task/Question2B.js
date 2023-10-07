const capitalizeString=(a)=>{
    let fin_str=[];
    for(let j=0;j<a.length;j++)
     {
        str=a[j];
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
         fin_str.push(str.join(' '));
    }
    return fin_str;
   
}

let a=["sudhan","chennai","tamilnadu"];
let final_str=capitalizeString(a);

console.log("After to changing to Upper :",final_str);