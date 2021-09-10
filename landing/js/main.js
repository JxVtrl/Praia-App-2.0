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
let botoes_carrossel = document.getElementById('botoes-carrossel');
let index = 0
let controle = 0 
let reverse = false

setInterval(carrosselMove, 2500);
function carrosselMove(){
    if(reverse == true){
        index--
        controle -= carrossel_item_width
        
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        createCarrosselBotoes(index)
        if(index == 0){
            reverse = false
            index, controle = 0,0
            carrosselMove()
        }
    }
    else{
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        createCarrosselBotoes(index)

        index++
        controle += carrossel_item_width
        if(index >= carrossel.childElementCount){
            reverse = true
            carrosselMove()
        }
    }
}

// Criar botoes do carrossel
createCarrosselBotoes(0)
function createCarrosselBotoes(index){
    botoes_carrossel.innerHTML = ''
    for(let i = 0; i < carrossel.childElementCount; i++){
        botoes_carrossel.innerHTML += 
        `<i class='bx bx-radio-circle botao-carrossel'></i>`;
    }  
    if(botoes_carrossel.children[index].classList.contains('bx-radio-circle')){
        botoes_carrossel.children[index].classList.remove('bx-radio-circle')
        botoes_carrossel.children[index].classList.add('bx-radio-circle-marked')
    }
}

// Botoes do carrossel
let todos_botoes_carrossel = document.querySelectorAll('.botao-carrossel')
todos_botoes_carrossel.forEach(botao => {
    botao.addEventListener('click', e => {
        alert('clicou')


    })
})



