// in typescript

/* class 만드는 팁 */
//1. 원하는 객체 만들기
const employeeSample = {
    name:"홍길동",
    age: 25,
    position: "developer",
    work(){
        console.log("working...");
    },
};
//2. class 설계하기
class Employee {
    // field
    name: string = "no name";
    age:number = 0;
    position?:string = "사원";
    //constructor
    constructor(name:string,age:number,position?:string) {
        this.name = name;
        this.age = age;
        if(position!==null||position!=="") this.position = position;
    }
    //method
    work(){
        console.log("working...");
    }
}
const employeeB = new Employee("강길동",29);
employeeB.work();

const employeeC:Employee = {
    name:"이길동",
    age: 30,
    position: "직원",
    work() {
        console.log("work")
    }
}

class ExecutiveOfficer extends Employee{
    officeNumber: number;
    constructor(name:string,age:number,position:string,officeNumber:number) {
        super(name,age,position);
        this.officeNumber = officeNumber;
    }
}