class Person{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}

var p  = new Person('Tom');
console.log(p.getName())
p.setName('jack');
console.log(p.getName())


//inheritance

class Web extends Person{
    constructor(name:string){
        super(name);
    }

    work():void{
        console.log("work");
    }
    getName():string{
        return this.name+"haha";
    }
}

var w = new Web('marry');
console.log(w.getName());
w.work();


//protected, public, private (default public)
//public 
class Person1{
    public name:string;
    constructor(n:string){
        this.name = n;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}

var p  = new Person1('Tom');
console.log(p.name)

//protected
class Person2{
    protected name:string;
    constructor(n:string){
        this.name = n;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}

class Web2 extends Person2{
    constructor(name:string){
        super(name);
    }

    work():void{
        console.log(this.name+"work");
    }
    getName1():string{
        return this.name+"haha";
    }
}


var p2  = new Web2('Tom');
// console.log(p2.name)
console.log(p2.getName())

class Person3{
    private name:string;
    constructor(n:string){
        this.name = n;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}

//private property can't be visited in derived class
// class Web3 extends Person3{
//     constructor(name:string){
//         super(name);
//     }

//     work():void{
//         console.log(this.name+"work");
//     }
//     getName1():string{
//         return this.name+"haha";
//     }
// }
// console.log(p2.name)

//static
class Person4{
    private name:string;
    constructor(n:string){
        this.name = n;
    }
    static sex:string = "male";
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    static method(){
        console.log('static'+Person4.sex)
    }
}
var p4  = new Person4('Tom');
// p4.method()
Person4.method()

//polymorphism

//abstract (only in abstract class, abstract function must be in abstract class)
abstract class Animal{
    abstract eat():any;
}

// var a = new Animal(); //wrong!!

class Dog extends Animal{
    eat():string{
        return "meat"
    }
}

console.log(new Dog().eat())