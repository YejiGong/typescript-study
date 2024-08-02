let a: string | number;
a = 'sd';
a = 10;

//a = true;

let arr:(number|string)[] = [1,"fdsa"]

type Dog = {
    name: string,
    color: string
}

type Person = {
    name: string,
    language: string
}

type Union1 = Dog | Person

let union1 : Union1 = {
    name:"",
    color:"",
}

let union2: Union1 = {
    name:"",
    language:""
}

let union3: Union1 = {
    name:"",
    language:"",
    color:""
} //교집합

// let union4: Union1 = {
//     name:""
// }

let variable: number & string;
//never가 됨

type Intersection = Dog & Person;

let intersection : Intersection = {
    name:"",
    color:"",
    language:""
}