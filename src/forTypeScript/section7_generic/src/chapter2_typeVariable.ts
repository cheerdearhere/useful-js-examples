
// 타입 변수를 여러개 사용할 경우
function swap<T>(a: T, b: T){
    return [b,a];
}
const [a, b] = swap(1,2);
// const [c, d] = swap("1",2);
function swap2<T, U>(a: T, b: U){
    return [b,a];
}
const [c, d] = swap2("1",2);

// 배열같은 자료를 인자로 받기
function returnFirstValue<T>(data:T){
    // return data[0];
}
// 타입 변수를 배열로 사용
function returnFirstValue2<T>(data:T[]){
    return data[0];
}
let str = returnFirstValue2([1,"string",true]);
console.log(str);
//rest parameter 적용
function returnFirstValue3<T>(data:[T, ...unknown[]]){
    return data[0];
}
let str2 = returnFirstValue3([1,"string",true]);
console.log(str2);

//타입 제한하기
function getLength(data:any){
    return data.length;
}
let anyVar1 = getLength([1,2,3]);
let anyVar2 = getLength("12345");
let anyVar3 = getLength({length:10});
let anyVar4 = getLength(10);//length property 없음

function getLength2<T extends {length:number}>(data:T){
    return data.length;
}
let extendsVar1 = getLength2([1,2,3]);
let extendsVar2 = getLength2("12345");
let extendsVar3 = getLength2({length:10});
// let extendsVar4 = getLength2(10);//length property 없음