 class Person {
        constructor(firstName, lastName, age, org, email, mobile, city,weight , height,qualification,gender){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.org=org;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
            this.weight=weight;
            this.height=height;
            this.qualification=qualification;
            this.gender=gender;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            Organization: ${this.org}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}
            Weight: ${this.weight}
            Height: ${this.height}
            Qualification: ${this.qualification}
            Gender: ${this.gender}`;
        }
    }
    let person1 = new Person("Sudhan", "ravi",26, "Capgemini", "sudhan@gmail.com", 9988776655, "Thiruvarur",75,5.11,"B.Tech","Male");
    let person2 = new Person("Sneha","Rajani", 24, "Amazon", "sneha@gmail.com", 9998887776, "chennai",55,5,5,"B.E","Female");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());