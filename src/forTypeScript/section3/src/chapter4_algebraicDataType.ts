/*
    대수타입
    여러개의 타입을 합성해서 새롭게 만들어낸 타입
        합집합 타입: union type
            or 기호인  | 사용
        교집합 타입: intersection type
            and 기호인 & 사용
*/

/**
 * 1. 합집합 
 */
let a: string | number;
a = 1;
a = "string";
// a = true;
let arr: (number|string|boolean)[] = [1,"hello",true];

type Cat = {
    name: string;
    color: string;
}
type Person = {
    name: string;
    language: string;
}
type Union1 = Cat | Person;
let union1:Union1 = {
    name:"",
    color:""
}
let union2:Union1 = {
    name:"",
    language:"",
}
let union3:Union1 = {
    name:"",
    color:"",
    language:""
}
//공통속성만 갖는것은 불가
// let union4:Union1 = {
//     name:"",
// }
// let union5:Union1 = {
//     color:"",
//     language:""
// }

/**
 * 2. 교집합
 */
let b: number&string;
// b=1;
// b="str";
// b="1";

type Intersection = Cat & Person;
let intersection1:Intersection = {
    name:"",
    color:"",
    language:"",
}