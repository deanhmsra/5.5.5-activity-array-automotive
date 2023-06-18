
const VehicleModule = require("./vehicleBaseClass")

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.started = false;
}

    loadPassenger() {
        if (this.passengers < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " does not have enough space." )
            } 
            } else {
            console.log(this.model + " " + this.make + " is full")
            }
        }

    start() {
        if (this.fuel > 0) {
            console.log("engine on")
            return this.started = true;
        }   else { console.log ("no fuel");
            return this.started = false;
        }
    }

    checkMileage() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
        }
    }
}

let myCar = new Car('mercury', 'sedan', '2002', 'red',  20000)
myCar.loadPassenger(3);
myCar.start(); 
myCar.checkMileage();

console.log(myCar)
