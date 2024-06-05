import {strict} from "node:assert";

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
interface DogCat extends Dog, Cat{}
let myCat: DogCat= {
    name: "dog",
    color: "blue",
    isBark: true,
    isScratch:true,
}

// 선언 합치기
// type은 불가
// type Person = {
//     name:string;
// }
// type Person = {
//     age: number;
// }
interface Person {
    name:string;
}
interface Person {
    age: number;
}

let person:Person = {
    name:"",
    age: 1,
}