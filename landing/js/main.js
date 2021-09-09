//////////////////////////
// Universal Functions //
////////////////////////

function formatNumber(num){
    if(num < 10) return '0' + num
    else return num
}

///////////////////////
// Getting time now //
/////////////////////

setInterval(getTimeNow, 1000);

function getTimeNow(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let tempo = formatNumber(h) + ":" + formatNumber(m) + ":" + formatNumber(s);

    return tempo;
}


////////////////
// Carrossel //
//////////////

let carrossel = document.querySelector('#carrossel');
let carrossel_item_width = document.getElementById('carrossel-container').clientWidth
let controle = 0

function moveCarrossel(){
    controle += carrossel_item_width
    if(controle >= carrossel_item_width*carrossel.childElementCount){
        controle = 0;
    }

    carrossel.style.transform = 'translateX(' + -controle + 'px)';
}

setInterval(moveCarrossel, 4000);




    