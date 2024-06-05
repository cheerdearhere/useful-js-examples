/**
 * 인터페이스 생성하기
 * 앞에 대문자 I를 넣어 붙이기도 함
 */
interface Person {
    name: string;
    age: number;
    sex?: 1|2;
    //method
    say: (a:string)=>void;//overloading은 안됨
    // say: (a:string,b:number)=>void;
    //호출 시그니쳐
    sayHi(): void;
    sayHi(a:string, b:number): void;
}

const person:Person = {
    name:"",
    age: 27,
    say: (m:string)=>{
        console.log(m);
    },
    sayHi() {
        console.log("Hi");
    }
};


