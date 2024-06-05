class Vehicle{
    constructor (weight,wheel,name) {
        this.weight=weight
        this.wheel=wheel
        this.name=name
        this.color="black"
        this.currentLocation="Banglore"
      

    }
    getDetails(){
        console.log(`${this.color} ${this.name} has ${this.weight} weight and ${this.wheel} wheels and current location is in  ${this.currentLocation}`);
    }
    travel(location){
        this.currentLocation=location
    }

    get getVehicleColor(){
        console.log(`The vehicle color is : ${this.color}`);
    }

    set setVehicleColor(color){
        this.color=color
    }

    static getVehicleDetails(){
        console.log("this is class method");
    }
}

let car=new Vehicle('2T',4,"Car")
let bus =new Vehicle('4T',6,"Bus")
let cycle=new Vehicle('0.5T',2 ,"Cycle")

car.getDetails();
car.travel("Mysore")
car.getDetails();
car.getVehicleColor
car.setVehicleColor ="red"
car.getDetails();
Vehicle.getVehicleDetails()



