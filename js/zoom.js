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
var k = 100/zoom;
console.log(k);

if(zoom > 125) {
    $("body").css("font-size", "100%");
}
/*$("html").css("transform","scale("+k+")");*/
