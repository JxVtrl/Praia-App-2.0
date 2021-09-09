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
let carrossel_item_width = 0;

function moveCarrossel(){
    carrossel_item_width += 400
    if(carrossel_item_width > 800){
        carrossel_item_width = 0;
    }

    carrossel.style.transform = 'translateX(' + -carrossel_item_width + 'px)';
}

setInterval(moveCarrossel, 4000);




document.querySelector('#carrossel').addEventListener('wheel', (e) => {
    if(e.deltaY > 0){
        e.target.scrollBy(-400, 0)
    }
    else{
        e.target.scrollBy(400, 0)
    }
})



    