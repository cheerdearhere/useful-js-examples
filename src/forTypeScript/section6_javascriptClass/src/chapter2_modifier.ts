
//access modifier
class Employee{
    private name: string;
    protected age: number;
    public position: string;
    defaultNum: number;
    constructor(name:string, age:number, position:string, defaultNum:number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.defaultNum = defaultNum;
    }

    work(){
        console.log(`${this.name} working!!`);
    }
}

const employee = new Employee("홍길동",27,"개발", 10);
// employee.name="강감찬";
// employee.age=50;
employee.position = "디자이너";
employee.defaultNum=20;


class ExecutiveOfficer extends Employee{
    officeNumber: number;
    constructor(name:string,age:number,position:string,officeNumber:number,defaultNum:number) {
        super(name,age,position,defaultNum);
        this.officeNumber = officeNumber;
    }
    say(){
        // console.log(this.name);//private은 불가
        console.log(this.age);//protected는 가능
        console.log(this.position);
        console.log(this.officeNumber);
        console.log(this.defaultNum);
    }
}

class Employee2{
    // private name: string;
    // protected age: number;
    // public position: string;
    defaultNum: number;// default access modifier
    constructor(private name:string, public age:number,protected position:string, defaultNum:number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.defaultNum = defaultNum;
    }

    work(){
        console.log(`${this.name} working!!`);
    }
}
