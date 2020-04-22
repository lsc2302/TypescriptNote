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


class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info);
        return true;
    }
}

class User{
    username:string | undefined;
    password:string | undefined;
} 

var u = new User();
u.username = 'a';
u.password = 'b';
var Db = new MysqlDb<User>();
// Db.add('123');
Db.add(u);