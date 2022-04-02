function burbankAlert() {
    alert("Let's check in on how the weather is for Ellen Degeneres!");
}

function chicagoAlert() {
    alert("The forecast for the Windy City is most likely windy.")
}

function dallasAlert() {
    alert("Let's check if the skies will be clear for the Cowboys game." )
}

var RemoveMessage = document.querySelector("#message")

function hide(element) {
    RemoveMessage.remove();
}





function myFunction() {
    var x = document.getElementById("TodayHigh").value;
    document.getElementById("TodayHigh").innerHTML = 75 + "°";
}

function myFunction1() {
    var x = document.getElementById("TodayLow").value;
    document.getElementById("TodayLow").innerHTML = 65 + "°";
}

function myFunction2() {
    var x = document.getElementById("TmwHigh").value;
    document.getElementById("TmwHigh").innerHTML = 80 + "°";
}

function myFunction3() {
    var x = document.getElementById("TmwLow").value;
    document.getElementById("TmwLow").innerHTML = 66 + "°";
}

function myFunction4() {
    var x = document.getElementById("FridayHigh").value;
    document.getElementById("FridayHigh").innerHTML = 69 + "°";
}

function myFunction5() {
    var x = document.getElementById("FridayLow").value;
    document.getElementById("FridayLow").innerHTML = 61 + "°";
}

function myFunction6() {
    var x = document.getElementById("SaturdayHigh").value;
    document.getElementById("SaturdayHigh").innerHTML = 78 + "°";
}

function myFunction7() {
    var x = document.getElementById("SaturdayLow").value;
    document.getElementById("SaturdayLow").innerHTML = 70 + "°";
}