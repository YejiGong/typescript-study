function func1(): string{
    return "hello"
}

function fun2(): void{
    console.log("hello");
}

let a: void;
//a = 1
//a = "hello";
//a = {};
a = undefined;

function fun3(): undefined{
    return;
}

function fun4(): never{
    while(true){}
} //정상적으로 종료 불가. 반환값 존재 자체가 모순.

function fun5(): never{
    throw new Error();
}

let k: never;
//k = undefined;

let anyVar: any;
//k = anyVar