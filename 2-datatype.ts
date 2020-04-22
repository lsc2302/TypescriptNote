//boolean, number, string, array, tuple, enum, any, null, undefined, void, never

//boolean
var flag:boolean = true;
// flag = 123; wrong
flag = false;

//string
var str:string = "123"

//arr
var arr:number[] = [11,22,33];
var arr1:Array<number> = [44,55,66];

//tuple
let arr2:[number,string] = [11,"123"];

//enum
enum Flag{success=1, error=2}
let s:Flag=Flag.success;
console.log(s);

//any
var num:any = true;
num = 123

//undefined
// var num1:number; //error!
// var num1:undefined;
var num1:undefined | number;
console.log(num1);

//null
// var num2:null = 123; error!
var num2:null = null;

//void
function run():void{
    console.log("run");
}
run();

//never never used
var a:never;
a = (()=>{
    throw new Error('mistake!')
})()

