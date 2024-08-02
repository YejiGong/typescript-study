interface CharacterInterface{
    name: string;
    moveSpeed: number;
    move(): void
}

class Character implements CharacterInterface{
    // name: string;
    // moveSpeed: number;

    // constructor(name:string, moveSpeed: number){
    //     this.name = name;
    //     this.moveSpeed = moveSpeed;
    // }

    constructor(public name:string, public moveSpeed: number){}
    //인터페이스는 무조건 퍼블릭만 가능

    move(){
        console.log(`${this.moveSpeed} 속도로 이동`);
    }
}