"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('Tom');
console.log(p.getName());
p.setName('jack');
console.log(p.getName());
//inheritance
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        console.log("work");
    };
    Web.prototype.getName = function () {
        return this.name + "haha";
    };
    return Web;
}(Person));
var w = new Web('marry');
console.log(w.getName());
w.work();
//protected, public, private (default public)
//public 
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p = new Person1('Tom');
console.log(p.name);
//protected
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    return Person2;
}());
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name) {
        return _super.call(this, name) || this;
    }
    Web2.prototype.work = function () {
        console.log(this.name + "work");
    };
    Web2.prototype.getName1 = function () {
        return this.name + "haha";
    };
    return Web2;
}(Person2));
var p2 = new Web2('Tom');
// console.log(p2.name)
console.log(p2.getName());
var Person3 = /** @class */ (function () {
    function Person3(n) {
        this.name = n;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    Person3.prototype.setName = function (name) {
        this.name = name;
    };
    return Person3;
}());
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
var Person4 = /** @class */ (function () {
    function Person4(n) {
        this.name = n;
    }
    Person4.prototype.getName = function () {
        return this.name;
    };
    Person4.prototype.setName = function (name) {
        this.name = name;
    };
    Person4.method = function () {
        console.log('static' + Person4.sex);
    };
    Person4.sex = "male";
    return Person4;
}());
var p4 = new Person4('Tom');
// p4.method()
Person4.method();
//polymorphism
//abstract (only in abstract class, abstract function must be in abstract class)
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// var a = new Animal(); //wrong!!
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        return "meat";
    };
    return Dog;
}(Animal));
console.log(new Dog().eat());
