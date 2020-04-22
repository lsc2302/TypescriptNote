"use strict";
//function generic
function getData(value) {
    return value;
}
getData(123);
//class generic
var FirstClass = /** @class */ (function () {
    function FirstClass() {
        this.list = [];
    }
    FirstClass.prototype.first = function () {
        return this.list[0];
    };
    return FirstClass;
}());
var f1 = new FirstClass();
console.log(f1.first());
var getData1 = function (value) {
    return value;
};
getData1('aa');
function getData2(value) {
    return value;
}
getData2('aa');
