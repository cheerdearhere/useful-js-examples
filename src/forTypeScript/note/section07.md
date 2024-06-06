
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

# III. map, forEach 메서드 타입 정의하기

# IV. Generic interface, Generic type

# V. Generic class

# VI. Promise and Generic