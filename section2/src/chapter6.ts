let anyvar:any = 10;
anyvar = 'str';
anyvar = ()=>{};

let num: number = 10;
num = anyvar;

//anyvar.toUpperCase()
//런타임에 오류남
//최대한 사용 x

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = ()=>{};
//num = unknownVar
//unknownVar.toUpperCase()

if (typeof unknownVar === "number"){
    num = unknownVar;
}