/**
 * Created by zjhzw on 2017/9/5.
 */
var navbar = document.querySelector('#navbar');
var origOffsetY = navbar.offsetTop;
function onScroll(e) {
    window.scrollY > origOffsetY ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}
document.addEventListener('scroll', onScroll);