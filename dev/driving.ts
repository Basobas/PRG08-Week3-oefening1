class Driving implements Behaviour{
    car:Car;
    onKeyDown():void{
        console.log('hallo')
        this.car.behaviour = new Jumping(this.car);
       
    }

    constructor(c:Car){
        this.car = c;
        

    }
    draw(){
        this.car.x += this.car.speed;
        
    }
}