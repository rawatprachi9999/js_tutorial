class Father {
    constructor(bike="HONDA"){
        this.house="2BHK"
        this.bike=bike
    }
    get details(){
        console.log(`I have ${this.house} house and ${this.bike} bike`);
    }
}

class Son extends Father{
    constructor(){
        super()
        this.car='BMW'
    }
    get details(){
        console.log(`I have ${this.house} house ,${this.car} car and ${this.bike} bike`);
    }
}
let s1=new Son()
    s1.details

let f1=new Father("pulsar")
f1.details