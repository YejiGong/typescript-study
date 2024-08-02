// interface Person{
//     name: string;
//     age: number;
// }
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person){
    return person[key];
}

const person= {
    name: "ㄹㄴㅁ",
    age: 27,
}

getPropertyKey(person, "name")