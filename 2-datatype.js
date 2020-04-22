"use strict";
//boolean, number, string, array, tuple, enum, any, null, undefined, void, never
//boolean
var flag = true;
// flag = 123; wrong
flag = false;
//string
var str = "123";
//arr
var arr = [11, 22, 33];
var arr1 = [44, 55, 66];
//tuple
var arr2 = [11, "123"];
//enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s);
//any
var num = true;
num = 123;
//undefined
// var num1:number; //error!
// var num1:undefined;
var num1;
console.log(num1);
//null
// var num2:null = 123; error!
var num2 = null;
//void
function run() {
    console.log("run");
}
run();
//never never used
var a;
a = (function () {
    throw new Error('mistake!');
})();
