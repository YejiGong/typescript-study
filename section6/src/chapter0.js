

let studentA = {
    name: "fdsa",
    grade: "A+",
    age: 27,
    study(){
        console.log("열심히 공부 함");
    },
    introduce(){
        console.log("안녕하세요!")
    }
}

class Student{
    name;
    grade;
    age;
    
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study(){
        console.log("열심히 공부 함");
    }

    introduce(){
        console.log("안녕하세요!")
    }
}

let studentB = new Student("adfs", "A+", 27) //인스턴스

class StudentDeveloper extends Student{
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programming(){
        console.log(`${this.favoriteSkill}으로 프로그래밍 함`);
    }

}

const studentDeveloper = new StudentDeveloper('asfdsa', 'B+', 26, 'typescript');
