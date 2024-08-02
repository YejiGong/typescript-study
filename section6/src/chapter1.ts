
const employee = {
    name: "sfdsa",
    age: 27,
    position: "developer",
    work(){
        console.log("일함");
    }
}

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() : void{
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee{
    officeNumber: number;
    constructor(name:string, age:number, position:string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("fdsa", 27, "개발자");
const employeeC: Employee = {
    name: "sdfa",
    age: 25,
    position: "sfjdsl",
    work(){
        console.log("일함")
    }
}