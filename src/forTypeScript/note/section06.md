
# I. javascript class!!
## A. 필요한 이유
- java의 class와 유사한 역할
- 같은 속성을 지닌 여러 객체를 만들기 위한 틀
  - 매번 반복하면...
    - 유지보수 관리
    - 실수로 이상이 생긴다면
```javascript
let studentA = {
    name:"홍길동",
    grade: "A",
    age: 27,
    study(){
        console.log("hard!!");
    },
    introduce(){
        console.log("hi!");
    }
};
```
## B. Class 만들기
- 보통 클래스의 첫 알파벳은 대문자(파스칼 표기법): Class
- 내부에서 method, constructor의 뒤에 세미콜론(;) 안함
- 구성
  - field: 클래스가 member로 갖는 속성. 직접 초기화해도 됨
    ```javascript
    name;
    grade;
    age;
    ```
  - Constructor: 클래스의 인스턴스 생성시 사용할 메서드
    ```javascript
    //constructor
    constructor(name,grade,age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    
    //인스턴스 생성시
    let studentB = new Student("강감찬", "B", 25);
    ```
  - method: 클래스가 member로 갖는 기능
    ```javascript
        study(){
            console.log("hard");
        }
        introduce(){
            console.log(`hi! my name is ${this.name}!`);
        }
      
    //인스턴스에서 사용
    studentB.introduce();
    ```
- 클래스를 확장(구체화)해 만들때 반복코드 줄이기
  - 클래스 확장: `extends` 키워드 사용
```javascript
class studentDev extends Student{
    //special field
    skills;
    //constructor
    constructor(name, grade, age, skills) {
        super(name,grade,age);
        this.skills = skills;
    }
    programming (gameName){
        if(typeof gameName === "string"){
            console.log(`create ${gameName} using ${this.skills}`);
        }else{
            console.error(`error: parameter(gameName) is only string type: `+gameName);
        }
    }
}
```

# II. Class in typescript
## A. 클래스 만드는 팁 
- 만들려고하는 인스턴스의 객체 만들기
```typescript
const employeeSample = {
    name:"홍길동",
    age: 25,
    position: "developer",
    work(){
        console.log("working...");
    },
}
```
- field 만들기
  - field 유형을 지정안하면 any 타입으로 지정 -> 컴파일 에러
    - 컴파일 에러를 방지하기위해 [tsconfig.json](../../forTypeScript/section6_javascriptClass/tsconfig.json) 수정
      > noImpplicitAny: false
  - 초기화(initializer)를 담당할 생성자나 매서드가 없으면 에러 발생
  ```typescript
      //fields
    name: string;
    age:number;
    position:string;
  ```
  - 선택적으로 사용되는 경우 `?:`: 비추천
  ```typescript
      //fields
    name: string;
    age?:number;
    position?:string;
  ```
  - 기본 값을 지정하면 더안전
  ```typescript
      //fields
    name: string = "no name";
    age:number = 0;
    position:string = "사원";
  ```
- constructor 지정
  - 원하는 필드의 값을 받아서 사용
```typescript
  constructor(name:string,age:number,position:string) {
      this.name = name;
      this.age = age;
      this.position = position;
  }
```
- method
```typescript
  work(){
      console.log("working...");
  }
  
  //사용부
  const employeeB = new Employee("강길동",29);
  employeeB.work();//type Employee
```
## B. 특징
- class : javascript의 class이자 typescript의 타입 역할
```typescript
  const employeeC:Employee = {
    //타입으로 생성
  }
```
- extends: 상속 가능
```typescript
class ExecutiveOfficer extends Employee{
    officeNumber: number;
    constructor(name:string,age:number,position:string,officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber;
    }
}
```
# III. typescript의 class 관련 기능