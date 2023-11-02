import {currentTime} from "./components/dateTime.js";

const tbody= document.querySelector(".tbody");

const tr = document.createElement("tr");
tr.classList.add("tr_content");
tr.innerHTML=`<td>1</td>`;
tr.innerHTML+=`<td>${currentTime(4)}</td>`;
tr.innerHTML+=`<td>2023.11.02</td>`
tbody.append(tr);


