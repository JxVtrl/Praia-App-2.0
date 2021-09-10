////////////////
// Carrossel //
//////////////
let carrossel = document.querySelector('#carrossel');
let carrossel_item_width = document.getElementById('carrossel-container').clientWidth
let botoes_carrossel = document.getElementById('botoes-carrossel');
let index = 0
let controle = 0 
let reverse = false

setInterval(carrosselMove, 3500);
function carrosselMove(){
    if(reverse == true){
        index--
        controle -= carrossel_item_width
        
        if(index == 0){
            reverse = false
            index, controle = 0,0
            carrosselMove()
        }
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        carrosselBotoes(index)
    }
    else{
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        carrosselBotoes(index)

        index++
        controle += carrossel_item_width
        if(index >= carrossel.childElementCount){
            reverse = true
            carrosselMove()
        }
        
    }
}

// Criar botoes do carrossel
function carrosselBotoes(index){
    for(let i = 0; i < carrossel.childElementCount; i++){
        botoes_carrossel.children[i].classList.remove('bx-radio-circle-marked')
        botoes_carrossel.children[i].classList.add('bx-radio-circle')
    }
    if(botoes_carrossel.children[index].classList.contains('bx-radio-circle')){
        botoes_carrossel.children[index].classList.remove('bx-radio-circle')
        botoes_carrossel.children[index].classList.add('bx-radio-circle-marked')
    }
}

// Mover Carrossel pelos botoes
let todos_botoes_carrossel = document.querySelectorAll('.botao-carrossel')
todos_botoes_carrossel.forEach(botao => {
    botao.addEventListener('click', e => {
        id = e.target.id

        switch(id){
            case 'botao-1':
                index = 0
                controle = 0
                reverse = false
                break;
            case 'botao-2':
                index = 1
                controle = carrossel_item_width * index
                break;
            case 'botao-3':
                index = 2
                controle = carrossel_item_width * index
                break;
        }

        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        carrosselBotoes(index)
    })
})