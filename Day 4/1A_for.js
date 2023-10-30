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
for(let i = 0; i < a.length; i++) {
    let obj = a[i];

    console.log("Employee Id :",obj.emp_id);
    console.log("Employee Name :",obj.name);
    console.log("Employee Designation :",obj.role);
    console.log("Employee Organization :",obj.company);
}