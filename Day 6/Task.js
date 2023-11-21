//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function

var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log("Countries from ASIA: ",result);
    //  console.log(result);
}

//----------------------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function


var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const popul = result1.filter((element)=>{
        return element.population<200000;
    })
console.log("Population less than 2 lakhs :",popul);
}

//-----------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload=function(){
    var result2=JSON.parse(request2.response);
   result2.forEach(element => {
    console.log("Country Name:",element.name);
        console.log("Country Capital",element.capital);
        console.log("Country Flag",element.flag); 

   });
}


//---------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all");
request3.send();
request3.onload=function(){
    var result3=JSON.parse(request3.response);
    var total = result3.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log("Total Population :",total);
 
}

//-----------------------------------------------------------------------------------------------

//e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log("country with Us dollar: ",currency);
    }

    //-----------------------------------------------------------------------------------------------
 

 