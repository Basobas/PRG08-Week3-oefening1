class Crashing implements Behaviour{
    private car:Car;

    constructor(c:Car){
        this.car = c;

    }
    draw(){
        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;
        this.car.div.classList.add("crashed");
    }
     onKeyDown():void{
        
    }
}