let user: object = {
  id: 1,
  name: "sdfa",
}; //object

//user.id;

let user2: {
  id?:number; //optional property
  name:string;
} = {
  id: 1,
  name: "sdfa"
}
//객체 리터럴
user2.id;


let dog = {
  name: "ㄹㅇㄴㅁㄹㄴ",
  color: "sfsda",
}

dog.name;

//객체 구조 기준으로 type 정의


user2 = {
  name: "fdsa"
}

let config:{
  readonly apiKey: string;
} = {
  apiKey : "afdsa"
}

//config.apiKey = 'sdafsa'