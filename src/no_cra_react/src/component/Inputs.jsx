import React, {useState} from 'react';

const Inputs = () =>{
    const [value, setValue] = useState('');

    const targetEl = document.getElementById("inputContainer");
    const linePlus=()=>{
        let items = document.getElementsByClassName("inputLine").length;
        // debugger;
        targetEl.innerHTML = targetEl.innerHTML + DefaultLine(items);
        console.log("linePlus!");
    }
    const lineMinus=()=>{
        let items = document.getElementsByClassName("inputLine").length;
        document.getElementById(`input_${items}`).remove();
        console.log("lineMinus!");
    }

    return (
        <div className="inputContainer">
            <input className="input" type="text" placeholder="Enter something" />
        </div>

    );
}
const sampleContainer = ()=> {
    return (
        <>
            <div className="btnContainer">
                {/*<button id="plusBtn" onClick={linePlus}>+</button>*/}
                {/*<button id="minusBtn" onClick={lineMinus}>-</button>*/}
                <button id="checkBtn">+</button>
            </div>
            <div id="inputContainer">
            </div>
        </>
    );
}
const DefaultLine =(idx)=> `
        <div class="inputLine" id="input_${idx}">
            <input type="text" class="${idx}_inputs" id="${idx}_type1"/>
            <input type="text" class="${idx}_inputs" id="${idx}_type2"/>
            <input type="text" class="${idx}_inputs" id="${idx}_type3"/>
            <input type="text" class="${idx}_inputs" id="${idx}_type4"/>
        </div>
    `;

export default Inputs;
export {
    DefaultLine,
    sampleContainer,
}