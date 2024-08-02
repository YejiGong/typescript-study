let a = 10;
// function func(param){

// }

let b= "hello";
let c = {
    id: 1,
    name: "dsfa",
    profile:{
        nickname:"dfas"
    },
};
let {id,name,profile} = c;

function func(message="hello"){
    return "hello"
}

let d; //any type으로 추론
d = 10; //number type으로
//d.toUpperCase()

d = "hello" //string type으로

const num = 10; //literal으로
let arr = [1, "string"] //string|number 타입으로

