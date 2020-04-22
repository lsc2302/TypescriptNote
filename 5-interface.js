"use strict";
//property interface
function printlabel(labelInfo) {
    console.log("printlabel");
}
// printlabel("123") wrong!
printlabel({ label: "123" });
function printName(name) {
    console.log(name.firstname);
    console.log(name.lastname);
}
var obj = {
    age: 20,
    firstname: "a",
    lastname: "b"
}; //must include firstname, lastname
printName(obj);
var md5 = function (key, value) {
    return key + value;
};
md5("123", "456");
var arr4 = ['123', '456'];
var arr5 = { name: "a", sex: "male" };
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.eat = function () {
        console.log("eat");
    };
    return Dog1;
}());
var d = new Dog1("wangwang");
d.eat();
var Web6 = /** @class */ (function () {
    function Web6(name) {
        this.name = name;
    }
    Web6.prototype.eat = function () {
        console.log("eat");
    };
    Web6.prototype.work = function () {
        console.log("work");
    };
    return Web6;
}());
new Web6("Tom").work();
