/**
 * unknown type
 * 최상위 타입(like java Object class): 집합에서 U
 */
function unknownExample(){
    //하위 타입의 값을 받을 수 있다.
    let a: unknown = 1;
    let b: unknown = "alpha";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
    //하위 타입 변수에 넣을 수 없다.
    let unknownVar: unknown;// javascript에는 없음
    // let num: number = unknownVar; 불가
    // let str: string = unknownVar;
    // let boolean: boolean = unknownVar;
    // let null: null = unknownVar;
}

/**
 * never type
 * 불가능 타입. 가장 하위타입으로 모든 타입에 넣을 수 있지만 역으로 다운 -캐스팅할 수 없음
 * 공집합 역할
 * 아무것도 받지 않을 때 사용
 */
function neverExample(){
    function neverFunc():never{//return이 never 타입
        while (true){}
    }
    //up casting 가능
    let num: number         = neverFunc();
    let str: string         = neverFunc();
    let boolean: boolean    = neverFunc();
    //down casting 불가
    // let a: never = 1;
    // let b: never = "alpha";
    // let c: never = true;
    // let d: never = null;
    // let e: never = undefined;
}

/**
 * void type
 * return이 따로 없는 경우 default
 * void도 return이 지정되면 변경됨
 */
function voidExample(){
    function voidFunc():void{
        console.log("void");
    }
    let voidVar:void = undefined;
}

/**
 * any type
 * unknown 바로아래 타입으로 최상위 타입 대신 사용
 * never 외 모든 타입의 캐스팅 가능
 * 워낙 열려있다보니 위험(like var)
 */
function anyExample(){
//up casting 가능
    let anyVar: any;
    let num: number         = anyVar;
    let str: string         = anyVar;
    let boolean: boolean    = anyVar;
    let undefinedVar:undefined = anyVar;// undefined 대상 유일 다운캐스팅 가능
    let neverVar:never;
    // neverVar = anyVar; 불가
//down casting 가능
    let a: any = 1;
    let b: any = "alpha";
    let c: any = true;
    let d: any = null;
    let e: any = undefined;
    let unknownVar: unknown;// 최상위도 받음
    let f: any = unknownVar;
    let undefinedVar2: undefined;
    let g: any = undefinedVar2;
    // let h: any = neverVar; 불가

}