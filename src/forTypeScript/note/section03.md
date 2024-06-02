
# I. 특이 타입
![타입](img/dataTypes.png)
## A. unknown
- 최상위 타입(like java Object class): 집합에서 U
- 다운 캐스팅만 가능
- 업케스팅은 불가
## B. never
- 최하위 타입
- 공집합 역할
- 업케스팅만 가능
## C. void 
- default 타입
- return이 지정되면 변경됨
## D. any
- 최상위 unknown 바로 아래
- `var` 처럼 제한되지 않는 타입은 위험한 타입
- never 타입을 제외한 모든 타입과 캐스팅 가능

# II. 객체 호환성
## A. 기본 타입 호환성
- 기본 타입과 리터럴 타입간 호환성
  - 업캐스팅만 가능
  - 더 구체적인(더 제한이 큰) 타입으로의 이동의 어려움
```typescript
let num1: number = 10;// number type
let num2: 10 = 10;// number literal
//super에 child가 둘어감: upper casting
num1=num2;
// num2 = num1; down casting x
```
## B. 객체 타입 호환성
- 타입이 요구하는 속성(properties)을 근거로 타입 호환이 체크됨
- Animal 타입에 Dog 타입을 넣을때 초과 프로퍼티는 무시됨
```typescript
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
```
- 직접 객체 생성시에는 타입스크립트의 초과 프로퍼티 체크에 걸림
```typescript
let dog:animal = {
  name: "명명",
  color: "brown",
  // bread: "진도" 초과 프로퍼티 체크(in typescript)
}
```
# III. 대수타입

# IV. 타입 관련(추론, 단언, 좁히기)

# V. 서로소 유니온