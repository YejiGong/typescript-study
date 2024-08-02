let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

let multiArr: (string|number)[] = [1,"hello"];

let doubleArr: number[][] = [
  [1,2,3],
  [4,5],
];

let tup1:[number,number] = [1,2]; //tuple
//tup1 = [1,2,3];
//tup1 = ["1","2"]; -> 타입, 길이 고정됨. 

tup1.push(1); //이때는 길이 조건 발동 x
tup1.pop();

const users : [string,number][] = [
  ["fdsjkl", 1],
  ["dfs", 2],
  ["sfdfa", 3],
  ["fdsa", 4],
  //[5, "sda"],
]
