
// display slider values    
var slider = document.getElementById("slider");
var output = document.getElementById("slidercount");
    
//starting value displayed
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = slider.value;
};

// create keys for generating
var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
};

//event listener for checkboxes/slider
genbtn.addEventListener('click', () =>  {
    var length = slider.value;
    var hasUpper = uppercase.checked;
    var hasLower = lowercase.checked;
    var hasNumber = numbers.checked;
    var hasSymbol = symbols.checked;

    display.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

//combine data from user inputs/filters to produce final password
function generatePassword(upper, lower, numbers, symbols, length) {
    var generatedPassword = "";
    var typesCount = upper + lower + numbers + symbols;
    var typesArr = [{upper}, {lower}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);

    if ( typesCount === 0 ) {
        return "";
    }

    for ( var i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }

    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// randomizing generator functions (using charset codes)
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    var symbols = "!@#$%^&*()_";
    return symbols[Math.floor(Math.random() * symbols.length)];
}



//copy to clipboard
function copyClipboard() {

    document.getElementById("display").select();

    document.execCommand("Copy");

}
