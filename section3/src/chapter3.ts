let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
//num2 = num1;

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog : Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

animal = dog;
//dog = animal;

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book : Book;
let programmingBook: ProgrammingBook = {
    name: "dfsa",
    price: 15000,
    skill: "fsa",
}

book =programmingBook;
//programmingBook = book;

let book2 : Book = {
    name: "dfsa",
    price: 15000,
    //skill: "fsa", -> 초과 프로퍼티 검사
}

let book3: Book = programmingBook;

function fun(book: Book){
    
}
fun({
    name: "dfsa",
price: 15000,
//skill: "fsa",
})
fun(programmingBook)