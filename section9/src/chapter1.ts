type StringNumberSwitch<T> = T extends number ? string : number;
let c: StringNumberSwitch<number|string> //string|number의 결과
let d: StringNumberSwitch<boolean | number | string> // string | number
type Exclude<T,U> = T extends U ? never : T;
type A = Exclude<number|string|boolean, string> // number | boolean 
type Extract<T,U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string> //string
