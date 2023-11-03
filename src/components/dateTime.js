import moment from "moment";


/**
 * 현재 시간을 표시함
 * @param type 반환 타입 결정
 * @return {string} 시간표시
 */
function currentTime(type){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ms = date.getMilliseconds();
    switch (type){
        case 1: return `${h}:${m}:${s}`;
        case 2: return `${h}:${m}:${s}.${ms}`;
        case 3: return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
        case 4: return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}.${ms}`;
        case 5: return `${h}시 ${m}분 ${s}초`;
        default: return "입력값이 잘못되었습니다. 관리자에게 문의하세요";
    }
}

function currentTimeUsingMoment(){
    return moment().format("H:m:s");
}


const dateTimeComponents = {
    currentTime,
    currentTimeUsingMoment,
};
module.exports = {
    currentTime,
    currentTimeUsingMoment,
};