function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = undefined;

    let unknownVar: unknown;
    //let num: number = unknownVar;
}

function neverExam(){
    function neverFunc(): never{
        while(true){}
    } //모든 타입에 upcasting만 가능

    let num: number = neverFunc();
    let str: string = neverFunc();

    //let never1: never = 10;
}

function voidExam(){
    function voidFunc(){
        console.log("hi")
        return undefined;
    }

    let voidVar: void = undefined;
}

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;
    anyVar = unknownVar;
    undefinedVar = anyVar; //never 제외하고 모든 타입에 upcasting/downcasting 가능
    //neverVar = anyVar;

}


