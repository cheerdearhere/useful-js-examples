/**
 * 함수 오버로딩
 * returnType은 같지만 parameter의 갯수나 타입이 다른 여러 함수를 만들어 호출할때 선택하도록핢
 */
import * as buffer from "node:buffer";


// 1. overload signature : 버전 지정
function func():void;
function func(a:number):void;
function func(a:number,b:number,c:number):void;

// 2. implement signature : 함수의 실제 구현부
function func(a?:number,b?:number,c?:number){}
// 3. 호출부
func();
func(1);
// func(1,2);//overload signature에 표시하지 않은 경우
func(1,2,3);
// func(1,2,3, 4);