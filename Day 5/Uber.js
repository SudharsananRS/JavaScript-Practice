class Uber{
    constructor(distance, duration, baseFare, costPerMile, costPerMinute,offer) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.offer=offer;
    }
  
    calculateFare() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute)-this.offer;
    }
  }
  
  const myUber_obj = new Uber(15, 30, 50, 11, 5,10);
  console.log("Fare :", myUber_obj.calculateFare());