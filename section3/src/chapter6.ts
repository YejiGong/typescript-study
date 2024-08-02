type Person = {
    name: string;
    age: string;
}

let person = {} as Person;
person.name = 'fdsa';
person.age = 'fdsa';

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

//dog.breed;

//A as B => A가 B의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never; 
let num2 = 10 as unknown;
//let num3 = 10 as string;
let num3 = 10 as unknown as string;
num3.toUpperCase();
//num3.toFixed();

let num4 = 10 as const;

let cat = {
    name: "고양이",
    color: "yellow"
} as const; //읽기전용 property

//cat.name = ''

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "fdsa",
    author: "dsaf"
}

const len: number = post.author!.length;