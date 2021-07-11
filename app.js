// var username = prompt("hey gimme ur username");
// alert("Your username"+username);


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.williamtomjacob.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// outputDiv.innerText = "Williamggggg Tom"
// console.log(outputDiv);
// console.log(txtInput);


// console.log(btnTranslate);

// function clickHandler() {
//     console.log("clicked");
//     console.log("input", txtInput.value);
// };
 
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured",error)
    alert("Something went wrong with the server.......Try after sometime");
}

function clickHandler() {
    // outputDiv.innerText ="The translated text is  \n"+txtInput.value;
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText =json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        // .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)