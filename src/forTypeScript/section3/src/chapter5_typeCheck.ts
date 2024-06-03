/**
 * 타입 추론
 * 굳이 지정하지 않아도 컴파일러가 추론
 */
// 변수의 초기값을 기준으로 추론
let a = 10;
let b = true;
let c = "";
let d = {
    name:"",
    age:1,
    pass: false,
    profile:{
        nickname:"",
        url:"",
        photo:"",
    }
}
let {age, name, profile} = d;
let [one, two, three] = [1,"hello",true];
function fnc(){
    return "string ";
}

let num;
num = 10;
num.toFixed();
// num.toUpperCase();//제한됨
num = "string";
// num.toFixed();
num.toUpperCase();//제한됨

const num2 = 10;
const str = "string";