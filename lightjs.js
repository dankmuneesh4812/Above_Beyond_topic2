$(document).ready(function() {
    // Set initial colors of the lights
    document.getElementById("light1").style.backgroundColor = "#FF0000";
    document.getElementById("light2").style.backgroundColor = "#00FF00";
    document.getElementById("light3").style.backgroundColor = "#0000FF";
    document.getElementById("light4").style.backgroundColor = "#FFFF00";
    document.getElementById("light5").style.backgroundColor = "#00FFFF";
   

    // Change color of light to random color when clicked
    $(".light").click(function() {
        var light = $(this);
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        light.css("background-color", randomColor);
    });
});
