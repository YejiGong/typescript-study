interface Person {
    readonly name : string;
    age?: number;
    sayHi(): void;
    sayHi(a:number, b:number) : void; //오버로딩하려면 호출 시그니처 사용
    //sayHi: () => void;
    //sayHi: (a:number, b: number) => void //이 방식으로는 오버로드 불가
}//|number

//인터페이스는 유니온 & 인터섹션 불가

const person: Person = {
    name: "dfsa",
    age: 11,
    sayHi : function() {
        console.log("hi");
    },
}

person.sayHi();
person.sayHi(1,2);

