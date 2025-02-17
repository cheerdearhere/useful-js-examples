/**
 * 이벤트리스너
 * 필수요소인 첫 인풋이 입력된경우 처리가능
 */
const SameLineChecker = () => {
    document.getElementById("checkBtn").addEventListener("click", ()=>{
        document.querySelectorAll(".inputLine").forEach((el)=>{
            let inputArr = el.children;
            if(inputArr[0].value !== ""){
                if(inputArr[1].value ===""){
                    alert("1비엇");
                }else if(inputArr[2].value ===""){
                    alert("2비엇");
                }else if(inputArr[3].value ===""){
                    alert("3비엇");
                }
            }
        });
    });
}
const exampleInputContainer = ()=>{
    return (
        <div id="inputContainer">
            <hr id="inputStartLine"/>
            <div className="inputLine" id="input_0">
                <input type="text" className="0_inputs" id="0_type1"/>
                <input type="text" className="0_inputs" id="0_type2"/>
                <input type="text" className="0_inputs" id="0_type3"/>
                <input type="text" className="0_inputs" id="0_type4"/>
            </div>
        </div>
    );
}