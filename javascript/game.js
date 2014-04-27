$(document).ready(function() {
    function doResize(divi, ima) {
        var screenWidth = $(document).width();
        var screenHeight = $(document).height();
    
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
});