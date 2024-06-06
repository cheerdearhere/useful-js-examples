
function funcAny(value:any){
    return value;
}
let num1 = funcAny(10);
num1.toUpperCase();//number인데??

function funcUnknown(value:unknown){
    return value;
}
let num2 = funcUnknown(10);
if(typeof num2 ==="number"){
    //타입 제한 없으면 불가
    num2.toFixed();
}

function funcGeneric<T>(value: T): T {
    return value;
}
let num3 = funcGeneric(10);
num3.toFixed();

let arr = funcGeneric<[number,number,number]>([1,2,3]);
// let arr2 = funcGeneric<[number,number,number]>([1,2,"3"]);
