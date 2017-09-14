/**
 * Created by zjhzw on 2017/9/11.
 */
function detectZoom (){
    var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    }
    else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio){
        ratio = Math.round(ratio * 100);
    }
    return ratio;
};
var zoom = detectZoom();
var height = window.screen.height;
console.log(zoom);

console.log($("body").css("font-size"));

if(height < 800) {
    if(zoom >= 175) {
        $("body").css("font-size", "85%");
        $(".navbar-right").css("font-size", "1.2em");
    }
    else if(zoom >= 150) {
        $("body").css("font-size", "90%");
        $(".navbar-right").css("font-size", "1.2em");
    }
    else if(zoom >= 125) {
        $("body").css("font-size", "99%");
    } else {
        $("body").css("font-size", "100%");
    }
}
else{
    if(zoom >= 175) {
        $("body").css("font-size", "80%");
    }
    else if(zoom >= 150) {
        $("body").css("font-size", "90%");
    }
    else if(zoom >= 125 && height>=900) {
        $("body").css("font-size", "120%");
    }
    else {
        $("body").css("font-size", "140%");
    }
}

console.log($("body").css("font-size"));
console.log(window.screen.width+'x'+height);