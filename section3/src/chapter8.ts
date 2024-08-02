type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
}
type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}
type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;

// function login(user:User){
//     if('kickCount' in user){
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
//     }else if('point' in user){
//         console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
//     }else{
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
//     }
// }

function login(user:User){

    switch (user.tag){
        case "ADMIN" :
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
            break;
        case "GUEST":
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
            break;
    }
    // if(user.tag === "ADMIN"){
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    // }else if(user.tag === "MEMBER"){
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
    // }else{
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
    // }
}


type LoadingTask = {
    state: "LOADING";
}
type FailedTask = {
    state: "FAILED";
    error: {
        message:string;
    };
}
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data:string;
    }
}
type AsyncTast = LoadingTask | FailedTask | SuccessTask

function processResult(task: AsyncTast){
    switch(task.state){
        case "LOADING":{
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 바새어 : ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
const loading : AsyncTast= {
    state: "LOADING"
}

const failed : AsyncTast = {
    state: "FAILED",
    error:{
        message:"e"
    }
}

const success : AsyncTast = {
    state:"SUCCESS",
    response:{
        data:"data"
    }
}