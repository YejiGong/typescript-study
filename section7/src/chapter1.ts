function swap<T>(a: T,b: T){
    return [b,a];
}

//const [a,b] = swap("1",2);

function swap2<T,U>(a:T, b:U){
    return [b,a]
}

const [a,b] = swap2("1", 2);

function returnFirstValue<T>(data:[T, ...unknown[]]){
    return data[0];
}

let num = returnFirstValue([0,1,2]);
let str = returnFirstValue([1, "hello", "fdsa"]);


function getLength<T extends {length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1,2,3]);
let var2 = getLength("1234");
let var3 = getLength({length:10});
//let var4 = getLength(4);
