/*
    타입 단언: 객체를 동적으로 처리하고 싶을때 사용
    as로 미리 제한해놓고 이후에 동적으로 처리
 */
type Person ={
    name: string;
    age: number;
    check: boolean;
}
// let person:Person = {}; 속성을 만족시키지 않아 초과 프로퍼티 체크
let person = {} as Person;
person.name="홍";
person.age=21;
person.check=true;

// let citizen:Person={
//     name:"",
//     age: 30,
//     check:true,
//     city: "",
// }
let citizen={
    name:"",
    age: 30,
    check:true,
    city: "",
} as Person;
// A as B
//A가 B의 슈퍼타입이거나 서브타입이어야함(유사한 속성이 있어야함)
let num1 = 10 as never;//모든 타입의 자식타입
let num2 = 10 as unknown; // 모든 타입의 부모타입
// let num3 = 10 as string;// number 타입과 string 타입은 교집합이 없으므로 컴파일 에러
let num4 = 10 as unknown as string;//as unknown을 거치면 가능(다중 단언)

let const1 = 10 as const;
type Config = {
    readonly name: string;
    readonly age: number;
    readonly color: string;
}
let constObj = {
    name:"고양이",
    age: 3,
    color: "yellow",
} as const;

//null 처리
type Post = {
    title: string;
    author?: string;//?: null을 입력받을 수 있음
}
let post1:Post= {
    title:"제제목목",
    author: "홍길동",
}

const len:number = post1?.author!.length;//!.은 값이 반드시 넘어온다는 not null 단언