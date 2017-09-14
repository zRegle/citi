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
console.log(zoom);

if(zoom >= 175) {
    $("body").css("font-size", "85%");
    $(".navbar-right").css("font-size", "1.2em");
}
else if(zoom >= 150) {
    $("body").css("font-size", "90%");
    $(".navbar-right").css("font-size", "1.2em");
}
else if(zoom >= 125) {
    $("body").css("font-size", "120%");
}
var fz = $("body").css("font-size");
console.log(fz);
