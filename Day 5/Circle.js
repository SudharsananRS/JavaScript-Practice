class Circle {
        constructor(radius = 1.0, color = "red") {
          this.radius = radius;
          this.color = color;
        }
      
        getradius() {
          return this.radius;
        }
      
        setradius(radius) {
          this.radius = radius;
        }
      
        getcolor() {
          return this.color;
        }
      
        setcolor(color) {
          this.color = color;
        }
      
        toString() {
          return `Circle [radius = ${this.radius} , color = ${this.color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this.radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this.radius;
        }
      }
      
      const circle1 = new Circle(3, "Orange");
      const circle2 = new Circle(6, "Pink");
      
      console.log("Circle 1 :",circle1.toString());
      console.log("Area of Circle:", circle1.getArea());
      console.log("Circumference of Circle:", circle1.getCircumference());
      
      console.log("Circle 2: ",circle2.toString());
      console.log("Area of Circle:", circle2.getArea());
      console.log("Circumference of Circle:", circle2.getCircumference());
      


      
    