const add = (a: number, b: number) : number  => a+b;


type Add = (a:number, b:number) => number;

const add1:Add = (a,b) => a+b;
const sub: Add = (a,b) => a-b;

type Operation2 = {
    (a:number, b:number): number;
}

const add2: Operation2 = (a,b) => a+b;

