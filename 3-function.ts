function run1():number{
    return 123;
}
run1()

//anonymous
let run2 = function():number{
    return 456;
}
run2()

//parameters
function getInfo(name:string, age:number):string{
    return name+age;
}

getInfo('123',456);

let getInfo2 = function(name:string, age:number):string{
    return name+age;
}

getInfo2('123',456);

//void 
function run3():void{
    console.log("run");
}
run3();

//select paramters (?) !!? must be the last parameter
function getInfo3(name:string, age?:number):string{
    return name+age;
}

getInfo3('123');

//default parameters
function getInfo4(name:string, age:number=20):string{
    return name+age;
}

getInfo4('123');

//...
function getInfo5(...result:number[]):void{
    result.map((item)=>console.log(item));
}

getInfo5(1,2,3,4);

//function overload

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
