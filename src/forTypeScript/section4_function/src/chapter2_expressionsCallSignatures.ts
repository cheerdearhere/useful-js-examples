
// 함수 타입 표현식
type Operator1 = (a:number, b:number)=> number;

const add1:Operator1 = (a:number,b:number) => a+b;
const minus1:Operator1 = (a,b)=>a-b;//타입 생략 가능
const multiply1:Operator1 = (a,b)=>a*b;
const divide1:Operator1 = (a,b)=>a/b;

// 따로 안하고 라인에서 정의하는 경우
const modulus1:(a:number, b:number)=> number = (a,b)=>a%b;

// 호출 시그니쳐(call signatures)
type Operator2 = {
    (a:number,b:number): number;
}

const add2: Operator2 = (a:number,b:number) => a+b;
const minus2:Operator2 = (a,b)=>a-b;//타입 생략 가능
const multiply2:Operator2 = (a,b)=>a*b;
const divide2:Operator2 = (a,b)=>a/b;

//객체처럼 사용 가능
type Operator3 = {
    (a:number,b:number): number;
    name:string;
}
const minus3:Operator3 = (a,b)=>a-b;//타입 생략 가능
console.log(minus3(1,2));
minus3.name="operation";
console.log(minus3.name);
