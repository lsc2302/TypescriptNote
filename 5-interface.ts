//property interface
function printlabel(labelInfo:{label:string}):void{
    console.log("printlabel");
}
// printlabel("123") wrong!
printlabel({label:"123"});

//
interface FullName{
    firstname:string,
    lastname:string
}

function printName(name:FullName){
    console.log(name.firstname);
    console.log(name.lastname);
}

var obj={
    age:20,
    firstname:"a",
    lastname:"b"
} //must include firstname, lastname
printName(obj);

//?
interface FullName2{
    firstname?:string,
    lastname:string
}

//function interface
interface encrypt{
    (key:string, value:string):string;
}

var md5:encrypt = function(key:string, value:string):string{
    return key+value;
}

md5("123","456");

//indexed interface (for array)
interface UserArr{
    [index:number]:string
}

var arr4:UserArr =['123','456']

//indexed interface (for object)
interface UserObject{
    [index:string]:string
}

var arr5:UserObject ={name:"a",sex:"male"}

//class interface (for class)

interface Animal1{
    name:string,
    eat(str:string):void;
}

class Dog1 implements Animal1{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log("eat")
    }
}

var d = new Dog1("wangwang");
d.eat();


//interface extends
interface Animal6{
    eat():void;
}

interface Person6 extends Animal6{
    work():void;
}

class Web6 implements Person6{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(){
        console.log("eat");
    }
    work(){
        console.log("work");
    }
}

new Web6("Tom").work();