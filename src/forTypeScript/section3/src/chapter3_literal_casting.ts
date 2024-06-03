/**
 * 기본 타입간 호환성
 */
let num1: number = 10;// number type
let num2: 10 = 10;// number literal
//super에 child가 둘어감: upper casting
num1=num2;
// num2 = num1; down casting x

/**
 * 객체 타입간의 호환성
 * 구조적 타입 시스템으로 property 기준 체크
 * 구체적일수록(속성이 많을 수록) 호환이 어렵다.
 */
type Animal = {
    name: string;
    color: string;
};
type Dog = {
    name: string;
    color: string;
    bread: string;
};
let animal:Animal = {
    name:"기린",
    color:"yellow"
}
let dog:Dog={
    name: "명명",
    color: "brown",
    bread: "진도"
}
animal = dog;//복사할때 필수 값을 만족하면 캐스팅 가능
// dog = animal;//내부의 properties가 다를 경우 거절됨.
// dog는 bread를 필수로 받는데 animal에 이 속성을 지니지 않으므로 구조를 만족시키지 못한다.

type Book = {
    title: string;
    author: string;
    price: number;
}
type ProgrammingBook = {
    title: string;
    author: string;
    price: number;
    skill: string;
}
let book:Book;
let react:ProgrammingBook = {
    title: "react 공부",
    author: "홍길동",
    price: 34_000,
    skill: "react.js"
}
book = react;
// react=book;

let book2:Book = {
    title: "react 공부",
    author: "홍길동",
    price: 34_000,
    // skill: "react.js" 초과 프로퍼티 검사(typescript)
}

let book3:Book = react;
//함수 인자로 전달하는 경우
function func(book:Book){}
// 직접 생성시 초과 프로퍼티 체크됨
func({
    title: "react 공부",
    author: "홍길동",
    price: 34_000,
    // skill: "react.js" //초과 프로퍼티 검사(typescript)
});
//객체 변수를 직접 넣는 경우 가능
func(react);