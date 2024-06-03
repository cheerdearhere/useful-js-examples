/*
    서로소 유니온 타입
    서로소 관계의 타입으로 이뤄진 유니온 타입(합집합)
 */

type Admin = {
    tag: "ADMIN";// 리터럴로 고정
    name: string;
    kickCount: number;
};
type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};
type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin|Member|Guest;

/**
 * 로그인 시 메세지
 * @param user 회원 유형
 * @return string 접속시 메세지
 * Admin -> {name}님. 현재까지 {kickCount}명 강퇴했습니다.
 * Member -> {name}님. 현재까지 {point} 모았습니다.
 * Guest -> {name}님. 현재까지 {visitCount}번 방문하셨습니다.
 */
function login(user:User):string{
    switch (user.tag){
        case "ADMIN":
            return `${user.name}님. 현재까지 ${user.kickCount}명 강퇴했습니다.`;
        case "MEMBER":
            return `${user.name}님. 현재까지 ${user.point} 모았습니다.`;
        case "GUEST":
            return `${user.name}님. 현재까지 ${user.visitCount}번 방문하셨습니다.`;
        default:
            return "등록되지 않은 접근 시도입니다.";
    }

    // const userKeys = {
    //     adminKey    : "kickCount",
    //     memberKey   :  "point",
    //     guestKey    : "visitCount",
    // } as const;
    // if(userKeys.adminKey in user){
    //     return `${user.name}님. 현재까지 ${user.kickCount}명 강퇴했습니다.`;
    // }
    // else if(userKeys.memberKey in user){
    //     return `${user.name}님. 현재까지 ${user.point} 모았습니다.`;
    // }
    // else if(userKeys.guestKey in user){
    //     return `${user.name}님. 현재까지 ${user.visitCount}번 방문하셨습니다.`;
    // }
    // else{
    //     return "등록되지 않은 접근 시도입니다."
    // }
}

/*
    복습용
 */
//비동기 작업의 결과 처리하는 객체
type LoadingTask ={
    state: "LOADING";
}
type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
        code: number;
    };
}
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

/**
 * 각 상태에 따른 메세지 전달
 * @param task
 */
function processResult(task:AsyncTask){
    switch (task.state){
        case "LOADING":
            console.log(task.state.toLowerCase());
            break;
        case "FAILED":
            console.log(`error: ${task.error.message}(${task.error.code})`);
            break;
        case "SUCCESS":
            console.log(`success: ${task.response.data}`);
            break;
        default:
            console.log("error: client side error");
            break;
    }
}

const loading:AsyncTask = {
    state: "LOADING",
}
const failed:AsyncTask = {
    state: "FAILED",
    error: {
        message: "server error",
        code: 500,
    },
};
const success:AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "taken data",
    }
};