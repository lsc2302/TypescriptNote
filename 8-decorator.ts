//class decorator
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
        console.log(target);
        console.log(params);
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

