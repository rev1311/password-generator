
// display slider values    
var slider = document.getElementById("slider");
    
var output = document.getElementById("slidercount");
    
//starting value displayed
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = slider.value;
};





// generate password
function generate() {

    //possible characters used
    var possChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@##$%^&*";

    var charReq = document.getElementById("slider").value

    var password = "";

    //loop to choose characters for password
    for( var i = 0; i <= charReq - 1; i++) {
        password = password + possChar.charAt(Math.floor(Math.random() * Math.floor(possChar.length - 1)));
    }


    //display random password
    document.getElementById("display").value = password;

}

// copy to clipboard
function copyClipboard() {

    
}


