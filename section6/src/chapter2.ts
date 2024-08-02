
class Employee {
    public name: string;
    private age: number;
    protected position: string;

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //생성자에 접근제어자 달면 => 필드 정의는 생략해야함

    //constructor(public name:string, private age:number, protected position: string){}
    
    work() : void{
        console.log(`${this.age} 일함`);
    }
}

class ExecutiveOfficer extends Employee{
    officeNumber: number;
    constructor(name:string, age:number, position:string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    func(){
        //this.age;
        this.position;
    }
}

const employee = new Employee('sdfsa', 27, 'developer');
employee.name = 'sdfasfdsfsf';
//employee.age = 123;
//employee.position = 'designer';