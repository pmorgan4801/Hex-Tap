$(document).ready(function () {
    var screenWidth = $(document).width();
    var screenHeight = $(document).height();
    
    $("#particles").css( "height", screenHeight.toString() + "px");
    $("#particles").css( "width", screenWidth.toString() + "px");
    
    function doResize(divi, ima) {
        $("body").css( "height", screenHeight.toString() + "px");
        $("body").css( "width", screenWidth.toString() + "px");
        
        var div = $("#" + divi);
        var img = $("#" + ima);
        
        div.css("width", img.css("width"));
        div.css("height", img.css("height"));
        div.css("margin", img.css("margin"));
        div.css("margin", img.css("margin"));
    }
    
    doResize("wrapper", "aspectimage");
    
    window.onresize = function () {
        doResize("wrapper", "aspectimage");
    }
    
    var id = 1;
    
    function hexParticles() {
        var numb = Math.floor((Math.random() * 3) + 1);
        var hex = "";
        if (numb === 1) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexsmall").width()));
            var hexSmall = '<img id="h' + id.toString() + '" style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + screenHeight.toString() + 'px;" class="hexsmall" src="img/hex50.png">';
            hex = hexSmall;
        } else if (numb === 2) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexmedium").width()));
            var hexMedium = '<img id="h' + id.toString() + '" style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + screenHeight.toString() + 'px;" class="hexmedium" src="img/hex75.png">';
            hex = hexMedium;
        } else if (numb === 3) {
            var spawn = Math.floor(((Math.random() * screenWidth) + 1) - (0.5 * $(".hexlarge").width()));
            var hexLarge = '<img id="h' + id.toString() + '" style="margin-left: ' + spawn.toString() + 'px; margin-top: ' + screenHeight.toString() + 'px;" class="hexlarge" src="img/hex100.png">';
            hex = hexLarge;
        }
        
        $("#particles").append(hex);
        var idString = $("#h" + id.toString());
        idString.transition({y: "-=600px", opacity: 0}, 3000);
        
        id = id + 1;
    }
    
    setTimeout(startPage, 8000);
    function startPage() {
        $("#title").transition({marginTop: "20%"}, 3000);
        $("#playbutton").transition({opacity: 1}, 3000);
        $("#settingsbutton").transition({opacity: 1}, 3000);
        $("#scoresbutton").transition({opacity: 1}, 3000);
        
        window.setInterval(function () {hexParticles()}, 400);
    }
});
