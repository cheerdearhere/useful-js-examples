/**
 * 타입 좁히기
 * 조건문 등을 이용해 타입을 상황에 따라 제한
 */

type Person = {
    name: string;
    age: number;
}

function func(value: number | string | Date | null | Person):void{
    // value+1;// number와 string의 유니온 타입
    if(typeof value === 'number')
        console.log(value.toFixed());
    else if(typeof value === 'string')
        console.log(value.toLowerCase());
    // else if(typeof value === "object"){
    //     console.log(value.getTime());
    // }
    else if(value instanceof Date){
        console.log(value.getTime());
    }
    else if(value && 'name' in value){
        console.log(`${value.name} - ${value.age} 세`);
    }
    // else if(value instanceof null){
    //
    // }
}