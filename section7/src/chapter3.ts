interface KeyPair<K,V>{
    key: K,
    value: V
}
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 132423
}

let KeyPair2 : KeyPair<boolean, string[]> = {
    key: true,
    value: ["sfds"]
}

interface Map<V>{
    [key:string]: V;
}

let stringMap : Map<string> = {
    key: "value"
}

let numberMap : Map<number> = {
    key: 1234
}

type Map2<v>= {
    [key:string]: v;
}

let stringMap2: Map2<string> = {
    key: "hello",
}

interface Student{
    type:"student";
    school: string;
}

interface Developer{
    type:"developer";
    skill:string;
}

interface User<T>{
    name: string;
    profile: T
}

function goToSchool(user: User<Student>){
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
    name: "ㅇㄴㄻ",
    profile:{
        type:"developer",
        skill:"typescript"
    }
}


const studentUser: User<Student> = {
    name: "sfasf",
    profile:{
        type:"student",
        school:"sdfsa"
    }
}