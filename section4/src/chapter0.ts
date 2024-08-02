function func(a:number,b:number){
    return a+b;
}

const add = (a: number,b: number) => a+b;

function introduce(name = "safdsa"){
    console.log(`name: ${name}`);
}

//introduce(1);

function introduce1(name="1224", tall?:number){
    console.log(`name:${name}`);
    if(typeof tall ==="number"){
        console.log(`tall:${tall+10}`);
    }
}

introduce1("dfsa")

function getSum(...args : number[]){
    let sum = 0;
    args.forEach((it) => (sum += it));
    return sum;
}

getSum(1,2,3,4);