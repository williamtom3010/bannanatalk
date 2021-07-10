// var username = prompt("hey gimme ur username");
// alert("Your username"+username);


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Williamggggg Tom"
// console.log(outputDiv);
// console.log(txtInput);


// console.log(btnTranslate);

// function clickHandler() {
//     console.log("clicked");
//     console.log("input", txtInput.value);
// };


function clickHandler() {
    outputDiv.innerText ="The translated text is  \n"+txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)
