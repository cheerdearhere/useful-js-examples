
# I. generic
- 어떤 타입을 제한해서 내부 로직에서 사용하는 자바의 제네릭과 달리 자바스크립트에서는 리턴에 대한 확신을 처리
- any 타입인 경우: 타입 체크가 전혀 되지 않아 반환 타입이 정해졌음에도 체크가 안됨
```typescript
function funcAny(value:any){
    return value;
}
let num1 = funcAny(10);
num1.toUpperCase();//number인데??
```
- unknown 타입인 경우: 타입 가드를 위한 제어문 필요
```typescript
function funcUnknown(value:unknown){
    return value;
}
let num2 = funcUnknown(10);
if(typeof num2 ==="number"){
    //타입 제한 없으면 불가
    num2.toFixed();
}
```
- 제네릭 처리하기
- 방식은 같음 
- 다이아몬드에 타입 변수 사용: `<T>`
  - parameterType, returnType T 사용 가능
```typescript
function funcGeneric<T>(value: T): T {
    return value;
}
let num3 = funcGeneric(10);
num3.toFixed();
```
- 배열을 인수로 받는 경우: 제네릭으로 타입 제한 가능
```typescript
let arr = funcGeneric<[number,number,number]>([1,2,3]);

// let arr2 = funcGeneric<[number,number,number]>([1,2,"3"]); 다른 타입은 불가
```
# II. 타입 변수 응용
## A. 메서드에서 여러 타입 변수를 사용하는 경우
- 앞에서 다른 타입이 입력되면 타입변수가 고정되버림
- 그 후에 오는 값이 다른 타입인 경우 에러가 발생
```typescript
function swap<T>(a: T, b: T){
  return [b,a];
}
const [a, b] = swap(1,2);
// const [c, d] = swap("1",2);
```
- c에 "1"이 들어가면서 타입 변수 T가 string으로 고정. d가 들어오면서 string 변수에 number 값이 전달되면서 컴파일 에러
- 타입 변수를 여러개 사용하면 두 타입의 유니온으로 처리
```typescript
function swap2<T, U>(a: T, b: U){
  return [b,a];
}
const [c, d] = swap2("1",2);
```
## B. 배열을 인자로 받는 경우 
- 배열 자체를 타입변수로 받으면 관련 기능을 사용할 수 없음
```typescript
function returnFirstValue<T>(data:T){
    // return data[0]; //에러
}
```
- T을 배열의 요소로 사용해 받음
  - 여러 타입의 데이터를 받으면 모두 유니온으로 처리
```typescript
function returnFirstValue2<T>(data:T[]){
    return data[0];
}
//data: (string | number | boolean)[]): void
let str = returnFirstValue([1,"string",true]);
```
- rest parameter 사용해 대상의 타입변수를 고정
```typescript
function returnFirstValue3<T>(data:[T, ...unknown[]]){
    return data[0];
}
let str2 = returnFirstValue3([1,"string",true]);
```
## C. 타입 제한하기
- 길이를 구하는 함수
  - 컴파일러에서 체크 못하는 경우있음: 컴파일 에러는 없으나 length property가 없어 런타임 에러
```typescript
function getLength(data:any){
  return data.length;
}
let anyVar1 = getLength([1,2,3]);
let anyVar2 = getLength("12345");
let anyVar3 = getLength({length:10});
let anyVar4 = getLength(10);//컴파일 에러 x
```
- 타입변수 배열을 사용하면 string 처럼 length property를 지닌 경우는 불가
```typescript
function getLength<T>(data:T[]){
    return data.length;
}
let anyVar1 = getLength([1,2,3]);
// let anyVar2 = getLength("12345");//배열 x
// let anyVar3 = getLength({length:10});//배열 x
// let anyVar4 = getLength(10);//length property 없음
```
- 타입 제한시키기 : `extends`를 사용해 상속 처리
  - 인터페이스 역할
```typescript
function getLength2<T extends {length:number}>(data:T){
    return data.length;
}
let extendsVar1 = getLength2([1,2,3]);
let extendsVar2 = getLength2("12345");
let extendsVar3 = getLength2({length:10});
// let extendsVar4 = getLength2(10);//컴파일 에러
```
# III. map, forEach 메서드 타입 정의하기

# IV. Generic interface, Generic type

# V. Generic class

# VI. Promise and Generic