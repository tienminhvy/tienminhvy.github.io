// JS Document
// Made with love by Tien Minh Vy, All Right Reserved

function clearPreload() {
    document.querySelector('#preload').style.opacity = 0;
    displayNone = () => {
        document.querySelector('#preload').style.display = 'none';
    }
    setTimeout(displayNone,1000)
}

setTimeout(clearPreload,2000)

document.addEventListener('DOMContentLoaded', () => {

    // Header
    // Menu
    function menu(){
        let menu = document.getElementById('menu');
        let menuBtn = document.getElementById('menu-btn');
        let header = document.querySelector('header').offsetWidth;
        let menuItems = document.querySelectorAll('#menu ul li')
        let count = 1;
        menuBtn.addEventListener('click', () => {
            if (count == 1) {
                menu.style.transform = `translateX(0px)`;
                count = 0;
            } else {
                menu.style.transform = `translateX(${header}px)`;
                count = 1;
            }
        })

        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', () => {
                menu.style.transform = `translateX(${header}px)`;
                count = 1;
            });
        }
    }
    menu();
}, false);

// Form

function formChecking(){ 
    let f1_name = document.querySelector('#f1-name').value;
    let f1_email = document.querySelector('#f1-email').value;
    let f1_checkbox = document.querySelector('#f1-checkbox').checked;
    let info = document.querySelector('#info');
    if (f1_checkbox == false) {
        info.innerHTML = 'You must check the box to submit this form!';
        return false;
    } else if (f1_name == '') {
        info.innerHTML = 'You must enter name to submit this form!';
        return false;
    } else if (f1_email == '') {
        info.innerHTML = 'You must enter email to submit this form!';
        return false;
    } else {
        return true;
    }
}