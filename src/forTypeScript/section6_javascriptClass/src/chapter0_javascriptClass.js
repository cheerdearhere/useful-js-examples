
// 같은 속성을 지닌 여러 객체를 만들기 위한 틀
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
    // 학생을 추가할때마다 이렇게? no!

// 생성하기
class Student {
    //field
    name;
    grade;
    age;

    //constructor
    constructor(name,grade,age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //method
    study(){
        console.log("hard");
    }
    introduce(){
        console.log(`hi! my name is ${this.name}!`);
    }
}

let studentB = new Student("강감찬", "B", 25);
studentB.introduce();

class studentDev extends Student{
    //special field
    skills;
    //constructor
    constructor(name, grade, age, skills) {
        super(name,grade,age);
        this.skills = skills;
    }
    programming =(gameName)=>{
        if(typeof gameName === "string"){
            console.log(`create ${gameName} using ${this.skills}`);
        }else{
            console.error(`error: parameter(gameName) is only string type: `+gameName);
        }
    }
}