interface Animal{
    name: string;
    age: number;
}

interface Dog extends Animal{ //Animal이 type이어도 확장 가능
    //name : "hello"; //재정의 가능
    //age: "hi"; -> 불가. 원본 property 타입의 subtype만 가능
    isBark: boolean;
}

interface Cat extends Animal{
    isScratch: boolean;
}

interface Chicken extends Animal{
    isFly: boolean,
}

interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
    name:"",
    age:11,
    isBark: true,
    isScratch: true,
}