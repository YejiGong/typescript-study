function func<T>(value: T) : T{
    return value;
}

let num = func(10);
num.toFixed()
let bool = func(true);
let arr = func<[number, number, number]>([1,2,3]);//tuple로 T 정의

