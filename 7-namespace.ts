namespace A{
    class User{
        username:string | undefined;
        password:string | undefined;
    } 
    var u = new User();
}

export namespace B{
    class User{
        username:string | undefined;
        password:string | undefined;
    } 
    var u = new User();
}

export namespace C{
    export class User{
        username:string | undefined;
        password:string | undefined;
    } 
    export var u = new User();
}