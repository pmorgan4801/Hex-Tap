$(document).ready(function () {
	var screenWidth = $(document).width();
    var screenHeight = $(document).height();
    
    var hexSmallOb = document.getElementsByClassName("hexSmall");
    var hexMediumOb = document.getElementsByClassName("hexmedium");
    var hexLargeOb = document.getElementsByClassName("hexlarge");
    
    var hexSmallPlace = screenHeight - (0.5 * ($(".hexsmall").height()));
    var hexMediumPlace = screenHeight - (0.5 * ($(".hexmedium").height()));
    var hexLargePlace = screenHeight - (0.5 * ($(".hexlarge").height()));
    
    var partDiv = document.getElementById("particles");
    
    function hexParticles() {
        var numb = Math.floor((Math.random() * 3) + 1);
        var hex = "";
        if (numb === 1) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexsmall").width()));
            var hexSmall = '<img style="margin-left: ' + spawn.toString() + 'px;" class="hexsmall" src="img/hex50.png">';
            hex = hexSmall;
        } else if (numb === 2) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexmedium").width()));
            var hexMedium = '<img style="margin-left: ' + spawn.toString() + 'px;" class="hexmedium" src="img/hex75.png">';
            hex = hexMedium;
        } else if (numb === 3) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexlarge").width()));
            var hexLarge = '<img style="margin-left: ' + spawn.toString() + 'px;" class="hexlarge" src="img/hex100.png">';
            hex = hexLarge;
        }
        
        $("#particles").append(hex);
        
    }
    
    window.setInterval(function () {hexParticles()}, 100);
});