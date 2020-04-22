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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//class decorator
console.log("**************************log class *****************************");
function logClass(params) {
    console.log(params);
    params.prototype.url = "property";
    params.prototype.run = function () {
        console.log("run");
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.url);
http.run();
function logClass1(params) {
    return function (target) {
        console.log(params);
        console.log(target);
        target.prototype.url = "modified";
        target.prototype.run = function () {
            console.log("run");
        };
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1("hello")
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
console.log(http1.url);
http1.run();
function logClass2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "modified";
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log("data");
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
    };
    HttpClient2 = __decorate([
        logClass2
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
console.log(http2.url);
//property decorator
console.log("**************************log property *****************************");
function logProperty(params) {
    //target: constructor for static, prototype for instance
    //attr: name of property
    return function (target, attr) {
        console.log(target);
        console.log(attr);
        target[attr] = params; //target.attr = params; wrong!!
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () {
    };
    __decorate([
        logProperty("hahah")
    ], HttpClient3.prototype, "apiUrl", void 0);
    return HttpClient3;
}());
var http3 = new HttpClient3();
console.log(http3.apiUrl);
//method decorator
console.log("**************************log method *****************************");
function logMethod(params) {
    //target: constructor for static, prototype for instance
    //methodName: name of method
    //desc:description
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.run = function () {
            console.log('run');
        };
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            oMethod.apply(this, args);
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("original method");
    };
    __decorate([
        logMethod("bbb")
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
http4.run();
http4.getData();
//log params
console.log("**************************log params *****************************");
function logParams(params) {
    //target: constructor for static, prototype for instance
    //methodName: name of method
    //desc:description
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function (uuid) {
        console.log("original method" + uuid);
    };
    __decorate([
        __param(0, logParams('uuid'))
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var http5 = new HttpClient5();
http5.getData("cccc");
//decorators sequence
//property>method>params>class
//same priority, last > front
