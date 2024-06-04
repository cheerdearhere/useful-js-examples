
// 함수 타입의 정의: parameter type, return type, 함수명으로 제안
function fnc(a:number,b:number){
    return a+b;
}
//화살표 함수 정의
const add = (a:number,b:number)=>a+b;

function introduce(name = "no name", tall?:number){
    console.log(`name: ${name}`+(tall ? `/ tall: ${tall}` : "" ));
}

introduce();
introduce("user");
introduce("user",23);

// function introduce(name:number = "no name"){
//     console.log(`name: ${name}`);
// }

//rest parameter
function getSum(...rest: number[]){
    let sum= 0;
    rest.forEach(num=>sum+=num);
    return sum;
}
getSum(1,2,3);
getSum(1,2,3,4,5);
//입력받는 갯수 제한
function getSumLimited(...rest: [number,number,number]){
    let sum= 0;
    rest.forEach(num=>sum+=num);
    return sum;
}
getSumLimited(1,2,3);
// getSumLimited(1,2,3,4,5); error
