
~~- `type`에 이름을 지어주는 또 다른 문법
# I. Interface
- 객체를 구조를 정의하는데 특화된 문법
- 앞에 대문자 I를 넣어 붙이기도 함: `IPerson`
- 팀에 맞추면 됨
```typescript
interface A{
    a: string;
    b: number;
}
```
- type과 유사
  - 메서드도 지정 가능
    - 화살표 표기법을 사용하면 overloading 불가
    - 호출시그니쳐는 가능
```typescript
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
```
- interface 구현부
```typescript
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
```

# II. 인터페이스 확장
- 여러 타입에 공통 속성(properties)이 있는 경우 이를 한 곳에서 관리
  - super의 프로퍼티를 sub에서 상속
  - `extends` 키워드 사용
  - 자바의 `extends`가 아닌 `implements`
```typescript
interface Animal {
    name: string;
    color: string;
}
interface Dog extends Animal {
    isBark:boolean;
}
interface Cat extends Animal{
    isScratch:boolean;
}
interface Chicken extends Animal{
    isFly: boolean;
}

let dog:Dog = {
    name: "dog",//super
    color: "blue",//super
    isBark: true//dog
}
```
- 다중 확장 가능: java interface 
```typescript
interface DogCat extends Dog, Cat{}
let myCat: DogCat= {
    name: "dog",
    color: "blue",
    isBark: true,
    isScratch:true,
}
```
- 인터페이스 합치기
  - `type`은 같은 이름으로 선언 불가
    ```typescript
    // type은 불가
    type Person = {
        name:string;
    }
    type Person = {
        age: number;
    }
    ```
  - 다른 곳에서 따로 선언되어도 마지막에 합쳐짐
    - 주로 인터페이스의 내용을 보강할때 사용
      ```typescript
      interface Person {
          name:string;
      }
      interface Person {
          // name: number; 
          age: number;
      }
    
      let person:Person = {
          name:"",
          age: 1,
      }
      ```