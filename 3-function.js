"use strict";
function run1() {
    return 123;
}
run1();
//anonymous
var run2 = function () {
    return 456;
};
run2();
//parameters
function getInfo(name, age) {
    return name + age;
}
getInfo('123', 456);
var getInfo2 = function (name, age) {
    return name + age;
};
getInfo2('123', 456);
//void 
function run3() {
    console.log("run");
}
run3();
//select paramters (?) !!? must be the last parameter
function getInfo3(name, age) {
    return name + age;
}
getInfo3('123');
//default parameters
function getInfo4(name, age) {
    if (age === void 0) { age = 20; }
    return name + age;
}
getInfo4('123');
//...
function getInfo5() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    result.map(function (item) { return console.log(item); });
}
getInfo5(1, 2, 3, 4);
function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
