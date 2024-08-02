type Exclude<T,U> = T extends U ? never : T;
type A = Exclude<string | boolean, boolean>;

type Extract<T,U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

function funcA(){
    return "hello"
}
function funcB(){
    return 10;
}

type ReturnType<T extends (...args : any) => any> = T extends (
    ...args : any
) => infer R 
? R 
: never;

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;