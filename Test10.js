class Sample
{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample(100,"Rajitha");
s.displayInfo();