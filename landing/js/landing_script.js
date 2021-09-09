/////////////////////////
// Universal Functions //
/////////////////////////

function formatText(txt){
    return txt[0].toUpperCase() + txt.slice(1)
}

function formatNumber(num){
    if(num < 10) return '0' + num
    else return num
}

///////////////////////
// Getting time now //
///////////////////////

setInterval(getTimeNow, 1000);

function getTimeNow(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let tempo = formatNumber(h) + ":" + formatNumber(m) + ":" + formatNumber(s);
}

///////////////
// Nav menu //
/////////////


let barraca_nav = document.getElementById('barraca-nav');
let barraca_menu = document.getElementById('barraca-menu');
let barraca_arrow = document.getElementById('barraca-arrow');

let esportes_nav = document.getElementById('esportes-nav');
let esportes_menu = document.getElementById('esportes-menu');
let esportes_arrow = document.getElementById('esportes-arrow');

barraca_nav.addEventListener('click', function(){
    if(esportes_menu.classList.contains('showMenu')){
        esportes_menu.classList.remove('showMenu');
        esportes_arrow.classList.remove('rotate');
    }
    barraca_menu.classList.toggle('showMenu');
    barraca_arrow.classList.toggle('rotate');
})

esportes_nav.addEventListener('click', function(){
    if(barraca_menu.classList.contains('showMenu')){
        barraca_menu.classList.remove('showMenu');
        barraca_arrow.classList.remove('rotate');
    }
    esportes_menu.classList.toggle('showMenu');
    esportes_arrow.classList.toggle('rotate');
})



let nav = document.querySelector('.sidebar');
let logOutIcon = document.getElementById('icon-logout')
let newIcon = document.getElementById('newLogOutIcon');

document.getElementById('logo').addEventListener('click', () => {
    if(nav.classList.contains('close')){
        nav.classList.remove('close');
        logOutIcon.classList.remove('hide');
        newIcon.innerHTML = ''
    }
    else{
        nav.classList.add('close');
        logOutIcon.classList.add('hide');
        newIcon.innerHTML = 
        `   <i class='bx bx-log-out' id="icon-logout" onclick="logout()"></i>
            <ul class="sub-menu"><li onclick="logout()"><a class="link_name" href="#">Sair</a></li></ul>   `
    }

})

    