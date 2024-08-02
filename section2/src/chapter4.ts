type User = {
    id: number,
    name: string,
    nickname: string
} //같은 scope 내에 중복은 불가.

let user: User = {
    id: 1,
    name: "sdfa",
    nickname: "sfa"
}

type ContryCodes = {
    [key : string] : string;
}
let contrycodes : ContryCodes = {
    korea: 'ko',
    unitedstate: 'us',
    unitedkingdom: 'uk'
}