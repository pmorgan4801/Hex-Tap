$(document).ready(function () {
	var screenWidth = $(document).width();
    var screenHeight = $(document).height();
    
    var hexSmall = '<img class="hexsmall" src="img/hex50.png">';
    var hexMedium = '<img class="hexmedium" src="img/hex75.png">';
    var hexLarge = '<img class="hexlarge" src="img/hex100.png">';
    
    var hexSmallOb = document.getElementsByClassName("hexSmall");
    var hexMediumOb = document.getElementsByClassName("hexmedium");
    var hexLargeOb = document.getElementsByClassName("hexlarge");
    
    var hexSmallPlace = screenHeight - (0.5 * ($(".hexsmall").height()));
    var hexMediumPlace = screenHeight - (0.5 * ($(".hexmedium").height()));
    var hexLargePlace = screenHeight - (0.5 * ($(".hexlarge").height()));
    
    var partDiv = document.getElementById("particles");
    
    function hexParticles() {
        var spawn = Math.floor((Math.random() * screenWidth) + 1);
        var numb = Math.floor((Math.random() * 3) + 1);
        var hex = "";
        if (numb === 1) {
            hex = hexSmall;
        } else if (numb === 2) {
            hex = hexMedium;
        } else if (numb === 3) {
            hex = hexLarge;
        }
        
        $("#particles").append(hex);
        
    }
    
    window.setInterval(function () {hexParticles()}, 1000);
});