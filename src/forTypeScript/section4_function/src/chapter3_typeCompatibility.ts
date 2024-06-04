
//함수 판단의 기준은 parameter type, return type

// 1. returnType: 넓은 범위의 타입을 좁은 범위의 타입으로 변환할 수 없음
type Va = ()=>number;
type Vb = ()=>10;
type Vc = ()=>string;

let a:Va = ()=> 10;
let b:Vb = ()=> 10;
let c:Vc = ()=> "10";

a=b;
// b=a;
// a=parseInt(c);

//2. parameterType
/* 매개변수의 개수가 같을 때 */
type Pa =(value:number)=>void;
type Pb =(value:number)=>void;
type Pc =(value:10)=>void;

let p1:Pa = (value)=>{};
let p2:Pb = (value)=>{};
let p3:Pc = (value)=>{};

p1 = p2;//number  <- number
// p2 = p3;//number  <- literal up casting 불가
p3 = p1;//literal <- number

//객체를 사용한 경우로 이해
type Animal = {
    name: string;
}
type Dog = {
    name: string;
    color:string;
}
//super
let animalFnc = (animal:Animal)=>{
    console.log(animal.name);
}
//sub
let dogFnc = (dog:Dog)=>{
    console.log(dog.name+" "+dog.color);
}
// animalFnc = dogFnc;
dogFnc = animalFnc;

//animalFnc = dogFnc를 만든다는것
let testFnc = (animal:Animal)=>{
    console.log(animal.name);
    // console.log(animal.color);//불가
}

/* 매개변수의 개수가 다를 때 */
type P1 =(a:number)=>void;
type P2 =(a:number,b:number)=>void;

let one:P1 = (a)=>{};
let two:P2 = (a,b)=>{};
// one = two;// 매개변수 개수가 모자라서 에러
two = one;// 필요한 매개변수 만족 후 패스


