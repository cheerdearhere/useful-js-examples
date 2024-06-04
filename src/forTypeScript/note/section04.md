
# I. [함수타입 정의](../section4_function/src/chapter1_initFunc.ts)
- javascript의 함수
```javascript
function fnc(a,b){
    return a+b;
}
```
- typescript
  - parameter type, return type, 함수명으로 제안
  - return type: return 값 기준 타입 추론
```typescript
// 일반 함수
function fnc(a:number,b:number){
    return a+b;
}
// 화살표 함수
const add = (a:number,b:number)=>a+b;
```
- parameter default 설정 가능 -> 타입 추론
  - default 추론과 설정 타입이 다른경우 컴파일 에러: `tring is not assignable to type number`
```typescript
function introduce(name = "no name"){
    console.log(`name: ${name}`);
}
// function introduce(name:number = "no name"){
//     console.log(`name: ${name}`);
// }
```
- 매개변수를 선택적으로 받을 경우 `?:`를 사용해 원하는 타입과 `undefined`의 유니온으로 처리
```typescript
function introduce(name = "no name", tall?:number){
  console.log(`name: ${name}`+(tall ? `/ tall: ${tall}` : "" ));
}

introduce();
introduce("user");
introduce("user",23);
```
- 주의!! 선택적 매개변수(?:)는 필수 매개변수(:) 앞에 있으면 안된다 
- rest parameter(...rest): 가변 길이의 매개변수 전달
```typescript
function getSum(...rest: number[]){
    let sum= 0;
    rest.forEach(num=>sum+=num);
    return sum;
}
getSum(1,2,3);
getSum(1,2,3,4,5,6);
```
- 무한정 받지 않도록 갯수를 제한할 수 있다. 
```typescript
function getSumLimited(...rest: [number,number,number]){
    let sum= 0;
    rest.forEach(num=>sum+=num);
    return sum;
}
getSumLimited(1,2,3);
// getSumLimited(1,2,3,4,5); error
```
# II. [함수 타입 표현식과 호출 시그니쳐](../section4_function/src/chapter2_expressionsCallSignatures.ts)
## A. 함수 타입 표현식: Function type expressions
- 함수 타입을 지정하면 해당 타입은 생략 가능
```typescript
type Operator = (a:number, b:number)=> number;

const add:Operator = (a:number,b:number) => a+b;
const minus:Operator = (a,b)=>a-b;//타입 생략 가능
```
- 단회성으로만 필요한 경우 내부에 선언
```typescript
const modulus:(a:number, b:number)=> number = (a,b)=>a%b;
```
## B. 호출 시그니쳐(call signatures)
- javascript에서는 함수도 결국 객체이기때문에 객체로 선언
- 잘 사용은 안하나 기억만
```typescript
type Operator2 = {
    (a:number,b:number): number;
}

const add2: Operator2 = (a:number,b:number) => a+b;
const minus2:Operator2 = (a,b)=>a-b;//타입 생략 가능
const multiply2:Operator2 = (a,b)=>a*b;
const divide2:Operator2 = (a,b)=>a/b;
```
- 객체형식이므로 다른 데이터도 가능
```typescript
type Operator3 = {
    (a:number,b:number): number;
    name:string;
}
const minus3:Operator3 = (a,b)=>a-b;//타입 생략 가능
console.log(minus3(1,2));
minus3.name="operation";
console.log(minus3.name);
```
# III. [함수 타입의 호환성](../section4_function/src/chapter3_typeCompatibility.ts)
- 어려울 수 있으나 일단 듣고 넘기기
- 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
  - 함수 판단의 기준은 parameter type, return type
## A. 반환값 타입이 호환되는가?
- 다운 캐스팅 불가(변수와 동일)
```typescript
type A = ()=>number;
type B = ()=>10;
type C = ()=>string;

let a:A = ()=> 10; //number
let b:B = ()=> 10; //number literal
let c:C = ()=> "10";// string

//return type 캐스팅 관계
a=b;//number literal(좁은 범위)를 number(넓은 범위)
// b=a; 반환값 간의 다운캐스팅은 불가
// a=parseInt(c);
```
## B. 매개변수 타입이 호환되는가?  
### 1. 매개변수의 개수가 같을 때
- 업 캐스팅 불가(변수와 반대)
```typescript
type Pa =(value:number)=>void;
type Pb =(value:number)=>void;
type Pc =(value:10)=>void;

let p1:Pa = (value)=>{};
let p2:Pb = (value)=>{};
let p3:Pc = (value)=>{};

p1 = p2;//number  <- number
// p2 = p3;//number  <- literal up casting 불가
p3 = p1;//literal <- number
```
- 객체로 이해하기
```typescript
//super
let animalFnc = (animal:Animal)=>{
    console.log(animal.name);
}
//sub
let dogFnc = (dog:Dog)=>{
    console.log(dog.name+" "+dog.color);
}
// animalFnc = dogFnc; 에러
dogFnc = animalFnc;
```
- animalFnc = dogFnc를 만든다는것
```typescript
let testFnc = (animal:Animal)=>{
  console.log(animal.name);
  // console.log(animal.color);//불가
}
let testFnc2 = (animal:Dog)=>{
    console.log(animal.name);
}
```
- 매개변수의 개수가 같을때 더 구체적인(범위를 좁힌) 매개변수를 받는 함수를 더 추상적인(범위를 넓힌) 매개변수를 받는 함수에 넣는 것은 불가
- more implement function <- more abstract function 
### 2. 매개변수의 개수가 다를 때
- 우선 만족하는 것이 중요
- 타입이 다른건 당연히 안됨
```typescript
type P1 =(a:number)=>void;
type P2 =(a:number,b:number)=>void;

let one:P1 = (a)=>{};
let two:P2 = (a,b)=>{};
// one = two;// 매개변수 개수가 모자라서 에러
two = one;// 필요한 매개변수 만족 후 패스
```
# IV. [함수 Overloading](../section4_function/src/chapter4_overloading.ts)
- 다른 객체지향 언어와 같음
- returnType은 같지만 parameter의 갯수나 타입이 다른 여러 함수를 만들어 호출할때 선택하도록핢
- 오직 Typescript에서만 가능
## A. overload signature : 버전 지정
```typescript
function func():void;
function func(a:number):void;
function func(a:number,b:number,c:number):void;
```
## B. implement signature : 함수의 실제 구현부
- 구현은 하나만 진행
- 다양한 수와 타입이 있을 수 있으므로 `?:` 사용
```typescript
function func(a?:number,b?:number,c?:number){}
```
## C. call functions: 호출부
- overload signature에 표시하지 않은 경우 에러 발생
- 상황에 맞게 함수가 구현됨
```typescript
func();
func(1);
// func(1,2);
func(1,2,3);
// func(1,2,3, 4)
```
# V. [custom type guard](../section4_function/src/chapter5_customTypeGuard.ts): 사용자 정의 타입가드
- 서로소 유니온을 만들 수 없는 경우 사용
  - 다른 사람의 라이브러리나 코드 등 개발자가 접근해 `tag`같은 서로소관계를 만들 수 없는 경우
- 객체를 판별하는 외부 함수를 만들고 그 함수에 리턴 결과의 객체 타입을 지정
```typescript
function isDog(animal:Animal): animal is Dog{//returnType을 boolean으로 표시하지 않음
            //animal을 변형
    return (animal as Dog).isBark !== undefined;//returnType은 boolean
}
function isCat(animal:Animal): animal is Cat{
  return (animal as Cat).isScratch !== undefined;
}

function waring(animal:Animal){
  if(isDog(animal)){//typescript가 인식됨
    console.log(animal.isBark);
  }
  else if(isCat(animal)){
    console.log(animal.isScratch);
  }
}
```