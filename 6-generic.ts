//function generic
function getData<T>(value:T):T{
    return value;
}

getData<number>(123);


//class generic
class FirstClass<T>{
    public list:T[]=[];
    first():T{
        return this.list[0];
    }
}

var f1 = new FirstClass<number>();
console.log(f1.first())

//interface generic
interface ConfigFn{
    <T>(value:T):T
}

var getData1:ConfigFn = function<T>(value:T):T{
    return value;
}

getData1<string>('aa');

interface ConfigFn1<T>{
    (value:T):T
}

function getData2<T>(value:T):T{
    return value;
}

getData2<string>('aa');