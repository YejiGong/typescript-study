type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}[]
const key = "author";
function printAuthorInfo(author: PostList[number]["author"]){ //author: post[key]는 불가. index에 들어올 수 있는건 오직 타입.
    //post["author"]["id"] 이런식으로 중첩으로 뽑아올수도 있음
    console.log(`${author.name} - ${author.id}`);
}
const post : PostList[number] = { //배열타입에서 하나의 요소만. PostList[0]으로 해도 됨.
    title: "제목",
    content: "본문",
    author: {
        id: 1,
        name: "ㄹㅇㄴㅁ"
    }
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type Tup3 = Tup[number]; //number|string|boolean, 모든 타입의 최적의 공통 타입 뽑아옴.

