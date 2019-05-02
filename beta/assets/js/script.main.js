// JS Document
// Made with love by Tien Minh Vy, All Right Reserved

document.addEventListener('DOMContentLoaded', function(){
    var navBtnMobileOpen = document.querySelector('.mobileNav');
    var navBtnMobileClosed = document.querySelector('.closed')
    var mobileNav = document.querySelector('.mobile');
    navBtnMobileOpen.onclick = function(){
        mobileNav.classList.add('mobileNavMovingOut');
        mobileNav.classList.remove('mobileNavMovingIn');
    }
    navBtnMobileClosed.onclick = function () {
        mobileNav.classList.add('mobileNavMovingIn');
        mobileNav.classList.remove('mobileNavMovingOut');
    }
},false)