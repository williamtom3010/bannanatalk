// var username = prompt("hey gimme ur username");
// alert("Your username"+username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

// console.log(btnTranslate);

function clickHandler() {
    console.log("clicked");
    console.log("text", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)
