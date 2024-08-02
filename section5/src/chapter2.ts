interface Person {
    name: string;
}
interface Person{
    //name:"hello"; -> 합칠시에는 같은 타입만 가능 (subtype도 불가)
    age: number;
}

const person: Person = {
    name:"",
    age: 27
}

interface Developer extends Person{
    name: "hello";

}

interface Lib {
    a: number;
    b: number;
}

interface Lib { //모듈 보강
    c: string;
}
const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}