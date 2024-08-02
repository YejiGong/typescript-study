type Func = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => infer R ? R : never;
type A = ReturnType<Func>; //string
type B = ReturnType<FuncB>; //number
type C = ReturnType<number>; //never
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>
type PromiseB = PromiseUnpack<Promise<string>>