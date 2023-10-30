let a = [{
    "emp_id" : "1", 
    "name"   : "sudhan",
    "role" : "Developer",
    "company": "Amazon"
},
{
    "emp_id" : "2", 
    "name"   : "ravi",
    "role" : "tester",
    "company": "TCS"
},
{
    "emp_id" : "3", 
    "name"   : "kumar",
    "role" : "Manager",
    "company": "CTS"
},
{
    "emp_id" : "4", 
    "name"   : "Prem",
    "role" : "Devops",
    "company": "HCL"
},
{
    "emp_id" : "5", 
    "name"   : "Gure",
    "role" : "Trader",
    "company": "Infosys"
}];

console.log("FOR Each");
a.forEach((i)=>{
    console.log("Emp Id :",i.emp_id);
    console.log("Employee Name :",i.name);
    console.log("Employee Designation :",i.role);
    console.log("Employee Organization :",i.company);
});