type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b; //반환값 기준 업캐스팅이라서 가능
//b = a; -> 반환값 기준다운캐스팅이라서 안됨

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d; //매개변수기준 업캐스팅 불가능
d = c; //매개변수기준 다운캐스팅 가능

type Animal = {
    name: string
}
type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

//animalFunc = dogFunc;
dogFunc = animalFunc;


type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b) => {}
let func2: Func2 = (a) => {};

func1 = func2; //할당하려고 하는쪽의 매개변수 개수가 더 적을때 호환이 됨(타입은 같을때)
//func2 = func1 
