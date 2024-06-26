/**
 * Contains functionality of the custom keyboard
 */
const keyboard = document.getElementById('keyboard');
const alphabetList = ["A", "I", "O", "Aa", "Ii", "Oo", "B", "P", "T", "ث", "ج", "ح", "خ", "D", "ذ", "R", "Z", "S", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "F", "ق", "V", "K", "G", "L", "M", "N", "ه", "و", "Y"]

// Build the keyboard and show it
for(const item in alphabetList){
    const letterAsset= `<img src="assets/${alphabetList[item]}.png"</img>`;
    const letterLabel = `<small style="position: absolute; right: 4px; bottom: 2px;">${alphabetList[item].toLowerCase()}</small>`
    const btn = `<button onclick="add(${item})" id="clickable-letter"> ${letterAsset} ${letterLabel}</button>`
    keyboard.innerHTML += btn;
}
keyboard.innerHTML += `<button onclick="space()" style="background: #00000010; width: 70px;" id="clickable-letter">space</button>`;
keyboard.innerHTML += `<button onclick="backspace()" style="background: #00000005; width: 50px;" id="clickable-letter">X</button>`;

// Toggle the keyboard
function toggleKeyboard(){
    keyboard.classList.toggle('hidden');
}

// Add a letter to the view when clicked in the keyboard
function add(index){
    const letterAsset= `<img src="assets/${alphabetList[index]}.png"</img>`;
    document.getElementById('view').innerHTML += letterAsset;
}

// Delete the last written item in the view 
function backspace() {
    document.getElementById('view').removeChild(document.getElementById('view').lastChild)
}

// Insert a space
function space(){
    view.innerHTML += `<div id="space"></div>`
}