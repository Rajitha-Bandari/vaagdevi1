class Sample
{
    constructor(){
        this.id=100;
        this.name="Rajitha"
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample();
s.displayInfo();