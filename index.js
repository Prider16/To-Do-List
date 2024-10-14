const addButton = document.getElementById("add");
let value1 = document.getElementById("value");
const display = document.getElementById("show");

function addvalue(){
    let text = value1.value;
    let html = `<div class="task">
                <input type="checkbox" id="check" onchange="Done()">
                <h2 id="value-text">${text}</h2>
                <button id="remove" onclick="return this.parentNode.remove();">Remove</button>
                </div>`;
    
    display.innerHTML += html;
}

function Done(){
    let checkBox = document.getElementById("check");
    let text = document.getElementById("value-text");
    // console.log(checkBox.checked);
    if(checkBox.checked == true){
        text.style.color = "Red";
    }
    else{
        text.style.color = "#1ea454";
    }
}

addButton.addEventListener("click",addvalue);