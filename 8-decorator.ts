//class decorator
console.log("**************************log class *****************************")
function logClass(params:any){
     console.log(params);
     params.prototype.url = "property";
     params.prototype.run = function(){
         console.log("run");
     }
}

@logClass
class HttpClient{
    constructor(){

    }
    getData(){

    }
}

var http:any = new HttpClient();
console.log(http.url);
http.run();

function logClass1(params:any){
    return function(target:any){
        console.log(params);
        console.log(target);
        target.prototype.url = "modified";
        target.prototype.run = function(){
         console.log("run");
     }
    }
}

@logClass1("hello")
class HttpClient1{
    constructor(){

    }
    getData(){

    }
}


var http1:any = new HttpClient1();
console.log(http1.url);
http1.run();

function logClass2(target:any){
    console.log(target);
    return class extends target{
        apiUrl="modified";
        getData(){
            console.log("data");
        }
    }
}

@logClass2
class HttpClient2{
    public apiUrl:string |undefined;
    constructor(){

    }
    getData(){

    }
}


var http2:any = new HttpClient2();
console.log(http2.url);

//property decorator
console.log("**************************log property *****************************")
function logProperty(params:any){
    //target: constructor for static, prototype for instance
    //attr: name of property
    return function (target:any,attr:any){
        console.log(target);
        console.log(attr);
        target[attr] = params;  //target.attr = params; wrong!!
    }
}
class HttpClient3{
    @logProperty("hahah")
    public apiUrl:string |undefined;
    constructor(){

    }
    getData(){

    }
}
var http3:any = new HttpClient3();
console.log(http3.apiUrl);


//method decorator
console.log("**************************log method *****************************")
function logMethod(params:any){
    //target: constructor for static, prototype for instance
    //methodName: name of method
    //desc:description
    return function(target:any, methodName:any, desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.run= function(){
            console.log('run');
        }

        var oMethod = desc.value;
        desc.value = function(...args:any){
            args = args.map((value:any)=> {
                return String(value)
            })
            oMethod.apply(this, args);
        }
    }
}
class HttpClient4{
    public apiUrl:string |undefined;
    constructor(){

    }
    @logMethod("bbb")
    getData(...args:any[]){
        console.log("original method");
    }
}
var http4:any = new HttpClient4();
http4.run();
http4.getData();

//log params
console.log("**************************log params *****************************")
function logParams(params:any){
    //target: constructor for static, prototype for instance
    //methodName: name of method
    //desc:description
    return function(target:any, methodName:any, paramsIndex:any){
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
    }
}

class HttpClient5{
    public apiUrl:string |undefined;
    constructor(){

    }
    getData(@logParams('uuid')uuid:any ){
        console.log("original method" + uuid);
    }
}
var http5:any = new HttpClient5();
http5.getData("cccc");

//decorators sequence
//property>method>params>class
//same priority, last > front

