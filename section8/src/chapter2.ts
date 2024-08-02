interface User{
    id:number;
    name:string;
    age:number;
}

type PartialUser = {
    [key in keyof User] ?: User[key];
}

type BooleanUser = {
    [key in "id" | "name" | "age"] : boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User] : User[key];
}
function fetchUser(): ReadonlyUser{
    return{
        id:1,
        name:"sfdas",
        age:27
    }
}

function updateUser(user:PartialUser){
    
}

updateUser({
    age:25
})