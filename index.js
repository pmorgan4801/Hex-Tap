$(document).ready(function () {
	var screenWidth = $(document).width();
    var screenHeight = $(document).height();
    
    $("#particles").css( "height", screenHeight.toString() + "px");
    $("#particles").css( "width", screenWidth.toString() + "px");
    
    function hexParticles() {
        var numb = Math.floor((Math.random() * 3) + 1);
        var hex = "";
        if (numb === 1) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexsmall").width()));
            var hexSmallPlace = screenHeight - (0.5 * $(".hexsmall").height());
            var hexSmall = '<img style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + hexSmallPlace.toString() + 'px;" class="hexsmall" src="img/hex50.png">';
            hex = hexSmall;
        } else if (numb === 2) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexmedium").width()));
            var hexMediumPlace = screenHeight - (0.5 * ($(".hexmedium").height()));
            var hexMedium = '<img style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + hexMediumPlace.toString() + 'px;" class="hexmedium" src="img/hex75.png">';
            hex = hexMedium;
        } else if (numb === 3) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexlarge").width()));
            var hexLargePlace = screenHeight - (0.5 * ($(".hexlarge").height()));
            var hexLarge = '<img style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + hexLargePlace.toString() + 'px;" class="hexlarge" src="img/hex100.png">';
            hex = hexLarge;
        }
        
        $("#particles").append(hex);
        $("#particles img").animate({marginTop: "-=300px", opacity: "0.1"}, 2000, function () {$(this).hide()});
    }
    
    window.setInterval(function () {hexParticles()}, 200);
});